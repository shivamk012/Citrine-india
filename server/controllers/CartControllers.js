const Cart = require('../models/Cart')
const ProductControllers = require('./ProductControllers')
// const UserControllers = require('./UserControllers')

exports.post = async function (req, res) {
  try { 
    let doc = await Cart.findOne({customer: req.body.customer, active:true})
    let exist = false

    // note useful anymore
    // if (!doc) {
    //   let doc = await Cart.create(req.body)
    //   res.send(doc)
    //   return;
    // }
    if (doc.cart !== []) {
      doc.cart = doc.cart.map(item => {
        if (item.productId === req.body.cart.productId) {
          item.quantity += 1
          exist = true
        }
        return item
      })
    }

    if (!exist) {
      doc.cart.push(req.body.cart)
      exist = false
    }

    await doc.save();
//   await UserControllers.addCart(doc)
    res.send(doc)
  } catch (error) {
    console.log(error)
    res.status(400).send({
    error: 'Server error! Kindly retry after some time.',
    addedToCart: false
    })
  }
}

// once cart badges completed
exports.delete = async function (req, res) {
  try { 
    const userId = req.params.userId;
    const productId = req.params.productId
    let doc = await Cart.findOne({customer:userId, active:true});
    doc.cart = doc.cart.filter(item => {
      return item.productId != productId
    })
    await doc.save();
  } catch (error) {
    console.log(error)
    res.status(400).send({
      error: 'Server error! Kindly retry after some time.',
      addedToCart: false
    })
  }
}

exports.quantityChange = async function (req, res) {
  try {
    let doc = await Cart.findOne({customer: req.body.customer, active:true})
    doc.cart = doc.cart.map(item => {
      if (item.productId === req.body.productId) {
        item.quantity = req.body.quantity
      }
      return item
    })
    await doc.save();
  } catch (error) {
    res.status(400).send({
      error: 'Server error! Kindly retry after some time.',
      addedToCart: false
    })
  }
}

exports.setActiveFalse = async function (udf5) {
  try {
    let doc = await Cart.findOne({_id: udf5})
    doc.active = false
    await doc.save();
    await Cart.create({
      customer: doc.customer,
      active: true,
      cart: []
    })
  } catch (error) {
    console.log(error)
  }
}

exports.getActive = async function (req, res) {
  try {
    let { cart } = await Cart.findOne({customer: req.params.id, active:true});
    const payload = await ProductControllers.getCartItems(cart);
    res.send(payload)
  } catch (error) {
    console.log(error)
  }
}

exports.getCartItems = async function (req, res) {
  try {
    let { cart } = await Cart.findOne({_id: req.params.id});
    const payload = await ProductControllers.getCartItems(cart);
    res.send(payload)
  } catch (error) {
    console.log(error)
  }
}
