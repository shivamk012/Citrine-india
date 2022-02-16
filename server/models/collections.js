// const { Products, Users } = require('../models')
const { model, Schema } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate")

const collectionSchema = new Schema({
  name: {type: String, unique:true},
  image: {type: String},
  products: [{type:String}], // productId belonging to this collection 
//   previousPurchase: [{type: Schema.Types.ObjectId, ref:'Transactions'}],
})

collectionSchema.plugin(mongoosePaginate)

const Collections = model("Collections", collectionSchema);
module.exports = Collections
