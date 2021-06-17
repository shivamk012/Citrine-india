// const { Products, Users } = require('../models')
const { model, Schema } = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate")

const collectionSchema = new Schema({
  name: {type: String},
  products: [{type:String}], // productId belonging to this collection 
//   previousPurchase: [{type: Schema.Types.ObjectId, ref:'Transactions'}],
})

// productSchema.plugin(mongoosePaginate)

const Collections = model("Collections", collectionSchema);
module.exports = Collections
