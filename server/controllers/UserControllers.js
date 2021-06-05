const User = require('../models/Users')
const GoogleAuth = require("../controllers/GoogleAuth")

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
  async getUsers (req, res) {
    try {
      const users = await User.paginate({},{limit:10})
      // console.log('users ',users) pages
      res.send(users)
    } catch (error) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async user (req, res) {
    try {
      const users = await User.findOne({_id:req.params.id})
      // console.log('users ',users)
      res.send(users)
    } catch (error) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  }
}