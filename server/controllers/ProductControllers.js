// const Uploads = require('../models/upload')
const { uploadFile } = require('../middleware/multer');
const Products = require('../models/Products');
// const fs = require('fs');
// const { resolveSoa } = require('dns');

exports.upload = async function (req, res) {
  try {
    const files = req.files;
    let data = JSON.parse((JSON.parse(JSON.stringify(req.body))).payload) // find another way
    const result = await uploadFile(files)
    data.image = result
    // console.log('data')
    // console.log(data)
    await Products.create(data)
    console.log('created')
    res.json({success:true})
  } catch (error) {
    return res.status(401).json({ success: false, message: `${error}` });
  }
}

exports.indexPaginated = async function (req, res) {
  try {
    const query = req.query.search 
    const page = req.query.page
    let searchObject = {};
    console.log('reached')

    if (query) {
      const re = new RegExp(`${query}.*`, "i");
      re.ignoreCase = true;
      searchObject = {
        $or: [{ name: re }, { collections: re }, { category:re }],
      };
    }

    const pData = await Products.paginate(searchObject, {
      page,
      limit: 6,
    });
    // console.log(pData)
    res.json({success:true, data: pData})
  } catch (error) {
    return res.status(401).json({ success: false, message: `${error}` });
  }
}

exports.edit = async function (req, res) {
  try {
    const product = await Products.findOne({_id:req.params.id})
    console.log(product)
    res.send(product)
  } catch (error) {
    res.status(400).send({
      error: 'Server error! Kindly retry after some time.'
    })
  }
}
