const Transaction = require('../models/Transaction')

exports.index = async function (body) {
    try {
      await Transaction.create(body)
    } catch (error) {
      console.log(error)
    }
  }