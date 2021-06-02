const Product = require('../models/Products')

exports.create = async function (req, res) {
  try {
    const data = req.body;
    console.log(data)
    await Product.create(data)
    return res.status(200).json({
    success: true,
    });
  } catch (error) {
    return res.status(401).json({ success: false, message: `${error}` });
  }
}