const { model, Schema } = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate")

const linkSchema = new Schema({
  customer: {type: String},
  cartId: String,
  activated: Boolean,
  active: Boolean
//   previousPurchase: [{type: Schema.Types.ObjectId, ref:'Transactions'}],
})

// collectionSchema.plugin(mongoosePaginate)

const Links = model("Links", linkSchema);
module.exports = Links