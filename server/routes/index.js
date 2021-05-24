const express = require('express')
const router = express.Router();
// const EventControllers = require("../controllers/EventControllers")
// const UserControllers = require("../controllers/UserControllers")
// const userService = require("../controllers/userService")

// router.get('/catalog',
//     EventControllers.getEvent)
 
router.get('/', function(req, res){
    res.render('index',{title:'Home'})
})

// router.get('/loginstate',
// userService.loginState)

// router.get('/deregister/:id',
// UserControllers.eventDreg)

module.exports = router