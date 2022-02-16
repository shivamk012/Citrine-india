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
    app.get('/dashboard/previousorders/:id',
    UserControllers.previousOrders)
    app.post('/user/paylink/update', UserControllers.paylink)
    app.get('/admin/paylink/data/:id', UserControllers.getPayLinkData)
    app.post('/admin/paylink/success', UserControllers.paylinkSuccess)
    // app.get('/login/:id',
    // UserControllers.getCart)

    app.get('/product/:pname', ProductControllers.productAndRelated)

    app.post('/admin/product/create', store.array('imageFiles', 12),
    ProductControllers.upload)
    app.get('/admin/product/:id', ProductControllers.get)
    app.post('/admin/product/:id/edit', store.array('imageFiles', 12), ProductControllers.update)
    app.get('/admin/product', ProductControllers.indexPaginated)
    app.delete('/admin/remove/img', ProductControllers.deleteImage)
    // app.delete('/admin/product/delete', ProductControllers.deleteProduct)

    app.get('/admin/users/get', UserControllers.indexPaginated)
    app.get('/admin/users/:id', UserControllers.user)
    app.post('/admin/user/changerole', UserControllers.changeRole)

    app.get('/admin/usercart/:id', CartControllers.getCartItems)

    app.post('/cart',
    CartControllers.post)
    app.post('/cart/quantityChange',
    CartControllers.quantityChange)
    app.delete('/cart/:userId/:productId',
    CartControllers.delete)
    app.get('/cart/active/:id',
    CartControllers.getActive)

    app.get('/payment/txnid/:id', PaymentControllers.txnid)
    app.post('/payment/hash', PaymentControllers.hash)
    app.post('/paymentResponse', PaymentControllers.response)

    app.get('/collection/all', CollectionControllers.all)
    app.get('/getcollections', CollectionControllers.indexPaginated)
    app.post('/admin/create/newcollection', store.array('imageFiles', 12), CollectionControllers.newCollection)
}
