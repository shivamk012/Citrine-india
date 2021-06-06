require('dotenv').config();
const multer = require('multer')
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')

const s3 = new S3({
  region: process.env.AWS_BUCKET_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
})

// uploads a file to s3
function uploadFile(files) {
  let resultArray = []
  files.forEach(file => {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Body: fileStream,
      Key: file.filename
    }

    resultArray.push(s3.upload(uploadParams).promise())
    // console.log('single', result)
    
  })
  return Promise.all(resultArray).then(end => {
    let images = []
    end.forEach(obj => {
      images.push(obj.Location)
    })
    return images
  })
}


// set storage
const storage =  multer.diskStorage({
  destination: (req, file,cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
    let fileName = file.originalname.substr(0,file.originalname.lastIndexOf('.'));
    fileName = fileName.replace(/\s/g,"") 

    cb(null, fileName + '-' + Date.now() + ext)
  }
})

store = multer({storage})
module.exports = {store, uploadFile}