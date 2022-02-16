const Transaction = require('../models/Transaction')
const CartControllers = require('./CartControllers')
const User = require('../models/Users')

exports.index = async function (body) {
  try {
    if (body.verified === "Yes") {
      await CartControllers.setActiveFalse(body.udf5)
    }
    const doc = await Transaction.create(body);
    // await UserControllers.setTransaction(doc._id, body.email); // Not working some bulshit occuring !!
    let user = await User.findOne({email: body.email})
    user.previousPurchase.push(doc._id)
    await user.save();
  } catch (error) {
    console.log(error)
  }
}

exports.previousOrders = async function (ordersArray) {
  try {
    let doc = await Transaction.find({ _id: { $in: ordersArray } });
    // doc = doc.map(product => {
    //   let quantity = 1;
    //   cartArray.forEach(element => {
    //     if (element.productId == product._id) {
    //       quantity = element.quantity
    //     }
    //   })
    //   return {product, quantity}
    // })
    return doc
  } catch (error) {
    console.log(error)
  }
}