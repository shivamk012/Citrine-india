const UserControllers = require('./controllers/UserControllers')
const ProductControllers = require('./controllers/ProductControllers.js')
const CartControllers = require('./controllers/CartControllers.js')
const PaymentControllers = require('./controllers/PaymentControllers.js')
const CollectionControllers = require('./controllers/CollectionControllers.js')
const {store} = require('./middleware/multer')

module.exports = (app) => {
    app.post('/register',
    UserControllers.register)
    app.post('/login',
    UserControllers.login)
    // app.get('/login/:id',
    // UserControllers.getCart)

    app.get('/product/:pname', ProductControllers.productAndRelated)

    app.post('/admin/product/create', store.array('imageFiles', 12),
    ProductControllers.upload)
    app.get('/admin/product/:id', ProductControllers.get)
    app.post('/admin/product/:id/edit', store.array('imageFiles', 12), ProductControllers.update)
    app.get('/admin/product', ProductControllers.indexPaginated)
    app.delete('/admin/remove/img', ProductControllers.deleteImage)

    app.get('/admin/users', UserControllers.indexPaginated)
    app.get('/admin/users/:id', UserControllers.user)

    app.post('/cart',
    CartControllers.post)
    app.post('/cart/quantityChange',
    CartControllers.quantityChange)
    app.delete('/cart/:userId/:productId',
    CartControllers.delete)
    app.get('/cart/active/:id',
    CartControllers.isActive)

    app.get('/payment/txnid/:id', PaymentControllers.txnid)
    app.post('/payment/hash', PaymentControllers.hash)
    app.post('/paymentResponse', PaymentControllers.response)

    app.get('/collection/all', CollectionControllers.all)
}
