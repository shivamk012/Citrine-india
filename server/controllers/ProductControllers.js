// const Product = require('../models/Products')
// const Uploads = require('../models/upload')
const { uploadFile } = require('../middleware/multer')
// const fs = require('fs');
// const { resolveSoa } = require('dns');

exports.upload = async function (req, res) {
  try {
    const files = req.files;
    console.log('files ',files)
    const result = await uploadFile(files)
    console.log('result',result)
    
    res.json({success:true})
  } catch (error) {
    return res.status(401).json({ success: false, message: `${error}` });
  }
}