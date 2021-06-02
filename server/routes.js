const UserControllers = require('./controllers/UserControllers')
const ProductControllers = require('./controllers/ProductControllers.js')

module.exports = (app) => {
    app.post('/register',
    UserControllers.register)
    app.post('/login',
    UserControllers.login)

    app.post('/admin/product/create',
    ProductControllers.create)
}