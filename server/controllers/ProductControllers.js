const Product = require('../models/Products')
// const Uploads = require('../models/upload')
const { uploadFile } = require('../middleware/multer')
// const fs = require('fs');
// const { resolveSoa } = require('dns');

exports.upload = async function (req, res) {
  try {
    const files = req.files;
    let data = JSON.parse((JSON.parse(JSON.stringify(req.body))).payload) // find another way
    const result = await uploadFile(files)
    data.image = result
    await Product.create(data)
    res.json({success:true})
  } catch (error) {
    return res.status(401).json({ success: false, message: `${error}` });
  }
}