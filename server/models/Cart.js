// const { Products, Users } = require('../models')
const { model, Schema } = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate")

const cartSchema = new Schema({
  customer: {type: String},
  cart: [{productId:String, count: {type:Number, default:0}}],
//   previousPurchase: [{type: Schema.Types.ObjectId, ref:'Transactions'}],
})

// productSchema.plugin(mongoosePaginate)

const Cart = model("Cart", cartSchema);
module.exports = Cart
