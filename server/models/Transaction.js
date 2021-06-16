const { model, Schema } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate")

const transactionSchema = new Schema({
    name:{type:String, required:true, unique:true},
    productCode:{type:String, required:true, unique:true},
    category:{type:String, enum:['Kids', 'Men', 'Women']},
    collections: [{type:String}],
    description: String,
    retailPrice: Number,
    wholesalePrice: Number,
    image: [{type:String}],// url of image
})

// transactionSchema.plugin(mongoosePaginate)

const transaction = model("Transaction", transactionSchema);
module.exports = transaction
