const Transaction = require('../models/Transaction')
const CartControllers = require('./CartControllers')
const UserControllers = require('./UserControllers')

exports.index = async function (body) {
    try {
      if (body.verified) {
        await CartControllers.setActiveFalse(body.udf5)
      }
      const doc = await Transaction.create(body)
      await UserControllers.setTransaction(doc._id, body.email)
    } catch (error) {
      console.log(error)
    }
  }