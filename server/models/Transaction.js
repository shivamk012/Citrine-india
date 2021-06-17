const { model, Schema } = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate")

const transactionSchema = new Schema({
    verified: {type: Boolean},
    mihpayid: String,
    status: String,
    udf5: String,
    mode:String,
    txnid:String,
    amount:String,
})

// transactionSchema.plugin(mongoosePaginate)

const Transaction = model("Transaction", transactionSchema);
module.exports = Transaction
