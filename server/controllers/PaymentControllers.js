const crypto = require('crypto')
require('dotenv').config();
const reqpost = require('request')
const key = process.env.MERCHANT_KEY ;
const salt = process.env.MERCHANT_SALT ;

module.exports = {
  async txnid (req, res) {
    try {
      const txnid =  crypto.randomBytes(8).toString('hex');
      
      res.send(txnid)
    } catch (err) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async hash (req, res) {
    try{
      const data = req.body;
      console.log(data)
      let cryp = crypto.createHash('sha512')
      //   let firstname = data.name.substr(0,data.name.firstIndexof(' '));
      const text = key+'|'+data.txnid+'|'+data.amount+'|'+data.productInfo+'|'+data.firstname+'|'+data.email+'|||||'+data.udf5+'||||||'+salt;
      // let hash = CryptoJS.SHA512(text).toString(CryptoJS.enc.Hex);
      console.log(text)
      cryp.update(text)
      const hash = cryp.digest('hex');
      console.log(hash)
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
      var verified = 'No';
      var txnid = req.body.txnid;
      var amount = req.body.amount;
      var productinfo = req.body.productinfo;
      var firstname = req.body.firstname;
      var email = req.body.email;
      var udf5 = req.body.udf5;
      var mihpayid = req.body.mihpayid;
      var status = req.body.status;
      var resphash = req.body.hash;
      var additionalcharges = "";
      //Calculate response hash to verify	
      var keyString 		=  	key+'|'+txnid+'|'+amount+'|'+productinfo+'|'+firstname+'|'+email+'|||||'+udf5+'|||||';
      var keyArray 		= 	keyString.split('|');
      var reverseKeyArray	= 	keyArray.reverse();
      var reverseKeyString=	salt+'|'+status+'|'+reverseKeyArray.join('|');
      //check for presence of additionalcharges parameter in response.
      if (typeof req.body.additionalCharges !== 'undefined') {
        additionalcharges = req.body.additionalCharges;
        //hash with additionalcharges
        reverseKeyString=	additionalcharges+'|'+reverseKeyString;
      }
      //Generate Hash
      var cryp = crypto.createHash('sha512');	
      cryp.update(reverseKeyString);
      var calchash = cryp.digest('hex');
      
      var msg = 'Payment failed for Hash not verified...<br />Check Console Log for full response...';
      //Comapre status and hash. Hash verification is mandatory.
      if(calchash == resphash)
        msg = 'Transaction Successful and Hash Verified...<br />Check Console Log for full response...';
      
      console.log(req.body);
      
      //Verify Payment routine to double check payment
      var command = "verify_payment";
      
      var hash_str = key  + '|' + command + '|' + txnid + '|' + salt ;
      var vcryp = crypto.createHash('sha512');	
      vcryp.update(hash_str);
      var vhash = vcryp.digest('hex');
      
      var vdata='';
      var details='';
      
      var options = {
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
          resp.on('data', function (chunk) {
            vdata = JSON.parse(chunk);	
            if(vdata.status == '1')
            {
              details = vdata.transaction_details[txnid];
              console.log(details['status'] + '   ' + details['mihpayid']);
              if(details['status'] == 'success' && details['mihpayid'] == mihpayid)
                verified ="Yes";
              else
                verified = "No";
              console.log(verified)
              // res.render()
            }
          });
        })
        .on('error', function (err) {
          console.log(err);
        });
    } catch (error) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  }
}
