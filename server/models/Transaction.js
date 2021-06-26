const { model, Schema } = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate")

const transactionSchema = new Schema({
    verified: String,
    mihpayid: String,
    status: String,
    udf5: String,
    mode: String,
    txnid: String,
    amount: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    pincode: String,
    email: String
})

// transactionSchema.plugin(mongoosePaginate)

const Transaction = model("Transaction", transactionSchema);
module.exports = Transaction
