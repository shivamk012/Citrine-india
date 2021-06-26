const User = require('../models/Users')
const GoogleAuth = require("../controllers/GoogleAuth");

module.exports = {
  async register (req, res) {
    try {
      const id_token = Object.keys(JSON.parse(JSON.stringify(req.body)))[0];
      // const id_token = req.body;
      const data = await GoogleAuth.register(id_token);
      res.send(data)
    } catch (err) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  // get cart check
  // async getCart (req, res) {
  //   try {
  //     const _id = req.params.id;
  //     // const id_token = req.body;
  //     const data = await GoogleAuth.register(id_token);
  //     res.send(data)
  //   } catch (err) {
  //     res.status(400).send({
  //       error: 'Server error! Kindly retry after some time.'
  //     })
  //   }
  // },
  async login (req, res) {
    try {
      const id_token = Object.keys(JSON.parse(JSON.stringify(req.body)))[0];
      // const id_token = req.body;
      const data = await GoogleAuth.login(id_token);
      res.send(data)
    } catch (err) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async indexPaginated (req, res) {
    try {
      const query = req.query.search 
      const page = req.query.page
      let searchObject = {};
  
      if (query) {
        const re = new RegExp(`${query}.*`, "i");
        re.ignoreCase = true;
        searchObject = {
          $or: [{ name: re }],
        };
      }
  
      const pData = await User.paginate(searchObject, {
        page,
        limit: 6,
      });
      res.json({success:true, data: pData})
    } catch (error) {
      return res.status(401).json({ success: false, message: `${error}` });
    }
  },
  async user (req, res) {
    try {
      const users = await User.findOne({_id:req.params.id})
      res.send(users)
    } catch (error) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async setTransaction (id, email) {
    try {
      let user = await User.findOne({email})
      user.previousPurchase.push(id)
      await user.save();
    } catch (error) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  // async addCart (payload) {
  //   try {
  //     const id_token = Object.keys(JSON.parse(JSON.stringify(req.body)))[0];
  //     // const id_token = req.body;
  //     const data = await GoogleAuth.register(id_token);
  //     res.send(data)
  //   } catch (err) {
  //     res.status(400).send({
  //       error: 'Server error! Kindly retry after some time.'
  //     })
  //   }
  // },
}
