const { model, Schema } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate")

const transactionSchema = new Schema({
    verified: {type: Boolean},
    
})

// transactionSchema.plugin(mongoosePaginate)

const transaction = model("Transaction", transactionSchema);
module.exports = transaction
