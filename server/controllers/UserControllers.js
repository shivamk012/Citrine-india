const User = require('../models/Users')
const Links = require('../models/Link')
const Cart = require('../models/Cart')
const GoogleAuth = require("../controllers/GoogleAuth");
const TransactionControllers = require('../controllers/TransactionControllers');
const CartControllers = require('../controllers/CartControllers');
const PaymentControllers = require('./PaymentControllers');
const ProductControllers = require('./ProductControllers')

module.exports = {
  async register (req, res) {
    try {
      const id_token = Object.keys(JSON.parse(JSON.stringify(req.body)))[0];
      // const id_token = req.body;
      const data = await GoogleAuth.register(id_token);
      res.send(data)
    } catch (err) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async login (req, res) {
    try {
      const id_token = Object.keys(JSON.parse(JSON.stringify(req.body)))[0];
      // const id_token = req.body;
      const data = await GoogleAuth.login(id_token);
      res.send(data)
    } catch (err) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async indexPaginated (req, res) {
    try {
      const query = req.query.search 
      const page = req.query.page
      let searchObject = {};
  
      if (query) {
        const re = new RegExp(`${query}.*`, "i");
        re.ignoreCase = true;
        searchObject = {
          $or: [{ name: re }],
        };
      }
  
      const pData = await User.paginate(searchObject, {
        page,
        limit: 6,
      });
      res.json({success:true, data: pData})
    } catch (error) {
      return res.status(401).json({ success: false, message: `${error}` });
    }
  },
  async user (req, res) {
    try {
      const users = await User.findOne({_id:req.params.id})
      res.send(users)
    } catch (error) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async setTransaction (id, email) { // rejected will see when free means never :)
    try {
      console.log('in setTransaction')
      let user = await User.findOne({email})
      user.previousPurchase.push(id)
      await user.save();
    } catch (error) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async previousOrders (req, res) {
    try {
      const { previousPurchase } = await User.findOne({_id: req.params.id});
      let doc = await TransactionControllers.previousOrders(previousPurchase)
      res.send(doc)
    } catch (err) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async changeRole (req, res) {
    try {
      let doc = await User.findOne({_id: req.body.id})
      doc.role = req.body.role
      await doc.save();
    } catch (error) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async paylink (req, res) {
    try {
      const _id = req.body.id
      console.log("needed",_id)
      const userCart = await Cart.findOne({customer: _id, active:true});
      await Links.create({
        customer: _id,
        cartId: userCart._id,
        activated: true,
        active: true
      })
      await CartControllers.setActiveFalse(userCart._id)
      res.send({success: true, msg:'Your payment link will be sent to your email ID'})
    } catch (error) {
      console.log(error)
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.',
        success: false
      })
    }
  },
  async getPayLinkData (req, res) {
    try {
      const userId = req.params.id;
      const { name, email} = await User.findOne({_id: userId})
      let paylinkData = await Links.find({customer: userId})
      let amount = [];
      let userCart = paylinkData.map(async (element) => {
        let cartData = await Cart.findOne({_id: element.cartId})
        amount.push(await PaymentControllers.amountCheck(email, element.cartId))
        retValue = await ProductControllers.getCartItems(cartData.cart)
        return retValue
      })
      return Promise.all(userCart).then(end => {
        let userData = {name, email, amount}
        let payload = {paylinkData, userCart: end, userData}
        res.send(payload)
      })
      
    } catch (error) {
      console.log(error)
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async paylinkSuccess(req, res) {
    try {
      const paylinkId = req.body.id;
      let paylinkDoc = await Links.findOne({_id: paylinkId})
      paylinkDoc.activated = false;
      await paylinkDoc.save();
    } catch (error) {
      console.log(error)
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  }
}
