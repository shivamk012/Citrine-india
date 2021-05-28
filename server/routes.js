const UserControllers = require('./controllers/UserControllers')

module.exports = (app) => {
    app.post('/register',
    UserControllers.register)
    app.post('/login',
    UserControllers.login)
}