const User = require('../models/Users')
const GoogleAuth = require("../controllers/GoogleAuth")

module.exports = {
    async register (req, res) {
      try {
        const id_token = Object.keys(JSON.parse(JSON.stringify(req.body)))[0];
        // const id_token = req.body;
        const token = await GoogleAuth.register(id_token);
        res.send(token)
      } catch (err) {
        res.status(400).send({
          error: 'email id already in use'
        })
      }
    },

}