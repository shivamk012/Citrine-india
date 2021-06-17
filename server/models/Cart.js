// const { Products, Users } = require('../models')
const { model, Schema } = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate")

const cartSchema = new Schema({
  customer: {type: String},
  cart: [{productId:String, quantity: {type:Number, default:1}}],
  active: {type: Boolean, default:true}
//   previousPurchase: [{type: Schema.Types.ObjectId, ref:'Transactions'}],
})

// productSchema.plugin(mongoosePaginate)

const Cart = model("Cart", cartSchema);
module.exports = Cart
