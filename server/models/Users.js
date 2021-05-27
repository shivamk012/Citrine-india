const { model, Schema } = require("mongoose");

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
    enum: ["admin", "customer"],
    default: "customer",
  },
  created:{ 
    type: Date,
    default: Date.now,
  },
  cart: [{productId:String, count:Number}], // Storing only the ids of the products purchased.
  previousPurchase: [{productId:String, count:Number}],
})

const User = model("User", UserSchema);
module.exports = User
