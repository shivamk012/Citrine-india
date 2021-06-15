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
    }
    doc.cart.forEach(element => {
      if (element.productId === req.body.cart) {
        res.send({message:'Product alerady in the cart'})
      }
    });

    doc.cart.push(req.body.cart)
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
    let doc = await Cart.findOne({customer: req.body.customer})
//   console.log(doc,'doc')

    if (!doc) {
    // console.log('req........',req.body)
    let doc = await Cart.create(req.body)
    res.send(doc)
    }

    doc.cart.push(req.body.cart)
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