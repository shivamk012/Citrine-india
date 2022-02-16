// const Uploads = require('../models/upload')
const { uploadFile, deleteFile } = require('../middleware/multer');
const Products = require('../models/Products');
const CollectionControllers = require('./CollectionControllers')
// const fs = require('fs');
// const { resolveSoa } = require('dns');

exports.upload = async function (req, res) {
  try {
    const files = req.files;
    let data = JSON.parse((JSON.parse(JSON.stringify(req.body))).payload) // find another way
    const result = await uploadFile(files)
    data.image = result
    await Products.create(data)
    const { _id, collections } = await Products.findOne({ name: data.name });
    await CollectionControllers.addProduct({ _id, collections })
    res.json({ success: true })
  } catch (error) {
    return res.status(401).json({ success: false, message: `${error}` });
  }
}

exports.indexPaginated = async function (req, res) {
  try {
    console.log('in')
    const query = req.query.search
    const page = req.query.page
    let searchObject = {};
    console.log(query)

    if (query) {
      const re = new RegExp(`${query}.*`, "i");
      re.ignoreCase = true;
      searchObject = {
        $or: [{ name: re }, { collections: re }, { category: re }],
      };
    }

    const pData = await Products.paginate(searchObject, {
      page,
      limit: 16,
    });
    res.json({ success: true, data: pData })
  } catch (error) {
    return res.status(401).json({ success: false, message: `${error}` });
  }
}

exports.get = async function (req, res) {
  try {
    const product = await Products.findOne({ _id: req.params.id })
    res.send(product)
  } catch (error) {
    res.status(400).send({
      error: 'Server error! Kindly retry after some time.'
    })
  }
}

exports.productAndRelated = async function (req, res) {
  try {
    const product = await Products.findOne({ name: req.params.pname })
    res.send(product)
  } catch (error) {
    res.status(400).send({
      error: 'Server error! Kindly retry after some time.'
    })
  }
}

exports.getCartItems = async function (cartArray) {
  try {
    const cartIds = cartArray.map(item => {
      return item.productId
    })
    let doc = await Products.find({ _id: { $in: cartIds } });
    doc = doc.map(product => {
      let quantity = 1;
      cartArray.forEach(element => {
        if (element.productId == product._id) {
          quantity = element.quantity
        }
      })
      return {product, quantity}
    })
    return doc
  } catch (error) {
    console.log(error)
  }
}

exports.update = async function (req, res) {
  try {
    const files = req.files;
    let data = JSON.parse((JSON.parse(JSON.stringify(req.body))).payload) // find another way
    console.log('data',data)
    const result = await uploadFile(files)
    result.forEach(item => {
      data.image.push(item)
    })
    const {_id} = await Products.findOneAndUpdate({_id: req.params.id}, data)
    await CollectionControllers.addProduct({ _id, collections: data.collections })
    res.json({ success: true })
  } catch (error) {
    return res.status(401).json({ success: false, message: `${error}` });
  }
}

exports.deleteImage = function (req, res) {
  try {
    const keys = req.body.keys;
    keys.forEach(async key => {
      await deleteFile(key)
    })
  } catch (error) {
    return res.status(401).json({ success: false, message: `${error}` });
  }
}

// exports.deleteProduct = function (req, res) {
//   try {
//     const id = req.body.id;
//     await 
//   } catch (error) {
//     return res.status(401).json({ success: false, message: `${error}` });
//   }
// }