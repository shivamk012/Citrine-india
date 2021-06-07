const { model, Schema } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate")

const productSchema = new Schema({
    name:{type:String, required:true, unique:true},
    productCode:{type:String, required:true, unique:true},
    category:{type:String, enum:['Kids', 'Men', 'Women']},
    collections: [{type:String}],
    description: String,
    retailPrice: Number,
    wholesalePrice: Number,
    image: [{type:String}],// url of image
})

productSchema.plugin(mongoosePaginate)

const Products = model("Products", productSchema);
module.exports = Products
