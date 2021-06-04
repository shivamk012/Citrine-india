const { model, Schema } = require("mongoose");


const uploadSchema = new Schema({
  filename:{
    type:String,
    unique:true,
    required:true,
  },
  contentType:{
    type:String,
    required:true,
  },
  imageBase64:{
    type:String,
    required: true,
  }
})

const Uploads = model("Uploads", uploadSchema);
module.exports = Uploads
