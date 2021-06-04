const Product = require('../models/Products')

exports.create = async function (req, res) {
  try {
    const data = JSON.parse(JSON.stringify(req.body));
    const files = req.files;
    console.log(data)
    console.log('files ',files)
    await Product.create(data)
    return res.status(200).json({
    success: true,
    });
  } catch (error) {
    return res.status(401).json({ success: false, message: `${error}` });
  }
}