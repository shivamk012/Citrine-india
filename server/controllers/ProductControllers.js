const Product = require('../models/Products')
const Uploads = require('../models/upload')
const fs = require('fs');
// const { resolveSoa } = require('dns');

exports.upload = async function (req, res) {
  try {
    const files = req.files;
    console.log('files ',files)

    // convert images into base64 encoding
    let imgArray = files.map((file)=>{
      let img = fs.readFileSync(file.path)

      return encode_image =  img.toString('base64')
    })

    const result = imgArray.map((src, index)=>{

      // create object to store in the collection
      let finalImg = {
        filename: files[index].originalname,
        contentType: files[index].mimetype,
        imageBase64: src
      }

      let newUpload = new Uploads(finalImg)

      return newUpload
          .save()
          .then(async ()=>{
            let id = []
            let db_id = (await Uploads.findOne({filename: files[index].originalname}))._id
            console.log(db_id)
            id.push(db_id)
            return id
          })
          .catch(error => {
            if(error){
              if(error.name === 'MongoError' && error.code === 11000) {
                return Promise.reject({ error:`Duplicate ${files[index].originalname}. File alerady exist`})
              }
              return Promise.reject({error: error.message || `Cannot Upload file ${files[index].originalname}`})
            }
          })
    })

    Promise.all(result)
      .then( id => {
        console.log(id)
        res.json({success: true, image_id:id})
      })
      .catch(err => {
        res.json({success: false, error:err})
      })
  } catch (error) {
    return res.status(401).json({ success: false, message: `${error}` });
  }
}