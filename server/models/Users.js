const { model, Schema } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate')

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    match: /.+@.+\..+/,
    lowercase: true,
    unique: true,
    dropDups: true,
  },
  password: {
    type: String,
  },
  imageUrl:{
    type:String,
    default: 'https://img.icons8.com/plasticine/2x/jewelry.png'
  },
  role: {
    type: String,
    enum: ["admin", "customer","wholesaler"],
    default: "customer",
  },
  created:{ 
    type: Date,
    default: Date.now,
  },
  cart: [{productId:String, count:Number}], // Storing only the ids of the products purchased.
  previousPurchase: [{productId:String, count:Number}],
})

UserSchema.plugin(mongoosePaginate)

const User = model("User", UserSchema);
module.exports = User
