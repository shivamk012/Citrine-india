const Product = require('./server/models/Products')
const Collection = require('./server/models/collections')

async function createcoll(value,img) {
    try {
        const doc = await Product.find({name:"Bracelet Rakhi"});
        let ids = []
        doc.forEach(element => {
      ids.push(element._id)
      return element._id;
  })
  await Collection.create({
    name:"Bracelet Rakhi",
    image: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/rakhi/CRA8.jpg',
    products: ids,
  })
    } catch (error) {
        console.log(error)
    }
}

createcoll("Bracelet Rakhi", 'imgurl')