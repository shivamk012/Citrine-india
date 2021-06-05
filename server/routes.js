const UserControllers = require('./controllers/UserControllers')
const ProductControllers = require('./controllers/ProductControllers.js')
const store = require('./middleware/multer')

module.exports = (app) => {
    app.post('/register',
    UserControllers.register)
    app.post('/login',
    UserControllers.login)

    app.post('/admin/product/create', store.array('imageFiles', 12),
    ProductControllers.upload)

    app.get('/admin/users', UserControllers.getUsers)
    app.get('/admin/users/:id', UserControllers.user)
}