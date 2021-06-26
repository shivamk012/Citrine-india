const Collection = require('../models/collections')
// const UserControllers = require('./UserControllers')

exports.all = async function (req, res) {
  try { 
    await Collection.find({},function(err, result){
        if(err){
            console.log(err)
            res.send(`Error ocuures ${err}`)
        } else {
            const payload = result.map(element => {
              return element.name
            });
            res.send(payload)
        }
    })
  } catch (error) {
    console.log(error)
    res.status(400).send({
      error: 'Server error! Kindly retry after some time.',
    })
  }
}


exports.addProduct = function (data) {
  try {
    data.collections.forEach(async element => {
      if (element === "") {return}
      await Collection.findOne({name: element}, async function(err, result){
        if(err){
          console.log(err)
        } else {

          if (!result) {
            const res = await Collection.create({
              name: element,
              products: [data._id]
            })
            return;
          }
          result.products.push(data._id)
          result.save();
        }
      })
    });
  } catch (error) {
    console.log(error)
    res.status(400).send({
        error: 'Server error! Kindly retry after some time.',
    })
  }
}