const { model, Schema } = require("mongoose");


const productSchema = new Schema({
    name:{type:String, required:true, unique:true},
    pType:{type:String, enum:['Kids', 'Mens', 'Womens']},
    rType: String,
    // description: String,
    price: String,
    image: String,// url of image
})

const Products = model("Products", productSchema);
module.exports = Products
