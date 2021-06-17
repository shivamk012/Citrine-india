const Cart = require('../models/Cart')
// const UserControllers = require('./UserControllers')

exports.post = async function (req, res) {
  try { 
    let doc = await Cart.findOne({customer: req.body.customer})
//   console.log(doc,'doc')

    if (!doc) {
    // console.log('req........',req.body)
      let doc = await Cart.create(req.body)
      res.send(doc)
      return;
    }
    doc.cart = doc.cart.map(item => {
      if (item.productId === req.body.cart.productId) {
        item.quantity += 1
      }
      return item
    })

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
    let doc = await Cart.findOne({customer:userId});
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
    let doc = await Cart.findOne({customer: req.body.customer})
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