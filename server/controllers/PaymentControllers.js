const crypto = require('crypto')
require('dotenv').config();
var CryptoJS = require("crypto-js");
const reqpost = require('request')
// const key = process.env.MERCHANT_KEY ;
const key = process.env.payment_key;
// const salt = process.env.MERCHANT_SALT ;
const salt = process.env.payment_salt;
const Cart = require('../models/Cart')
const User = require('../models/Users')
const ProductControllers = require('./ProductControllers')
const TransactionControllers = require('./TransactionControllers');

module.exports = {
  async txnid (req, res) {
    try {
      const doc = await Cart.findOne({customer: req.params  .id, active:true})
      const txnid =  crypto.randomBytes(8).toString('hex');
      res.send({txnid, udf5:doc._id})
    } catch (err) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async hash (req, res) {
    try{
      const data = req.body;
      // amount calc
      const {role} = await User.findOne({email:data.email})
      const cartDetails = await Cart.findOne({_id:data.udf5})
      const doc = await ProductControllers.getCartItems(cartDetails.cart)
      let amount = 0; 
      doc.forEach(item => {
        if (role === 'customer') {
          subTotal = item.product.retailPrice*item.quantity;
        } else {
          subTotal = item.product.wholesalePrice*item.quantity;
        }
        amount += subTotal
      })
      
      // console.log(data.txnid+" "+data.productInfo+" "+data.firstname+" "+data.email+" "+data.udf5);
      console.log(key+" "+amount+" "+salt);


      const text = key+'|'+data.txnid+'|'+amount+'|'+data.productInfo+'|'+data.firstname+'|'+data.email+'|||||'+data.udf5+'||||||'+salt;
      let hash = crypto.createHash('sha512',text).digest('hex');
      console.log(text);
      // let hash = CryptoJS.SHA512(text).toString(CryptoJS.enc.Hex);
      // cryp.update(text)
      // const hash = cryp.digest('hex');
      console.log(hash);
      res.send({hash, key})
    } catch (err){
      console.log(err)
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async response (req, res) {
    try {
      let verified = 'No';
      const txnid = req.body.txnid;
      const amount = req.body.amount;
      const productinfo = req.body.productinfo;
      const firstname = req.body.firstname;
      const email = req.body.email;
      const udf5 = req.body.udf5;
      const mihpayid = req.body.mihpayid;
      const status = req.body.status;
      const resphash = req.body.hash;
      const additionalcharges = "";
      //Calculate response hash to verify	
      const keyString 		=  	key+'|'+txnid+'|'+amount+'|'+productinfo+'|'+firstname+'|'+email+'|||||'+udf5+'|||||';
      const keyArray 		= 	keyString.split('|');
      const reverseKeyArray	= 	keyArray.reverse();
      const reverseKeyString=	salt+'|'+status+'|'+reverseKeyArray.join('|');
      //check for presence of additionalcharges parameter in response.
      if (typeof req.body.additionalCharges !== 'undefined') {
        additionalcharges = req.body.additionalCharges;
        //hash with additionalcharges
        reverseKeyString=	additionalcharges+'|'+reverseKeyString;
      }
      //Generate Hash
      const cryp = crypto.createHash('sha512');	
      cryp.update(reverseKeyString);
      const calchash = cryp.digest('hex');
      
      let msg = 'Payment failed for Hash not verified...<br />Check Console Log for full response...';
      //Comapre status and hash. Hash verification is mandatory.
      if(calchash == resphash)
        msg = 'Transaction Successful and Hash Verified...<br />Check Console Log for full response...';
      
      console.log(req.body);
      
      //Verify Payment routine to double check payment
      const command = "verify_payment";
      
      const hash_str = key  + '|' + command + '|' + txnid + '|' + salt ;
      const vcryp = crypto.createHash('sha512');	
      vcryp.update(hash_str);
      const vhash = vcryp.digest('hex');
      
      let vdata='';
      let details='';
      
      const options = {
        method: 'POST',
        uri: 'https://test.payu.in/merchant/postservice.php?form=2',
        form: {
          key: key,
          hash: vhash,
          var1: txnid,
          command: command
        },
        headers: {
          /* 'content-type': 'application/x-www-form-urlencoded' */ // Is set automatically
        }
      };
      
      reqpost(options)
        .on('response', function (resp) {
          console.log('STATUS:'+resp.statusCode);
          resp.setEncoding('utf8');
          resp.on('data',async function (chunk) {
            vdata = JSON.parse(chunk);	
            if(vdata.status == '1')
            {
              details = vdata.transaction_details[txnid];
              console.log(details['status'] + '   ' + details['mihpayid']);
              if(details['status'] == 'success' && details['mihpayid'] == mihpayid)
                verified ="Yes";
              else
                verified = "No";
              await TransactionControllers.index({
                mihpayid,
                status,
                udf5,
                mode: req.body.mode,
                txnid,
                amount,
                verified,
                address1: req.body.address1,
                address2: req.body.address2,
                city: req.body.city,
                state: req.body.state,
                pincode: req.body.zipcode,
                email,
              }) // add shipping details
              res.render('response', {Verified: verified, data: req.body})
            }
          });
        })
        .on('error', function (err) {
          console.log(err);
        });
    } catch (error) {
      console.log(error)
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async amountCheck (email, cartId) {
    try {
      const {role} = await User.findOne({email})
      const cartDetails = await Cart.findOne({_id:cartId})
      const doc = await ProductControllers.getCartItems(cartDetails.cart)
      let amount = 0;
      doc.forEach(item => {
        if (role === 'customer') {
          subTotal = item.product.retailPrice*item.quantity;
        } else {
          subTotal = item.product.wholesalePrice*item.quantity;
        }
        amount += subTotal
      })
      return amount
    } catch (error) {
        console.log(error)
    }
  },
}
