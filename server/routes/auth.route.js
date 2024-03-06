const AuthController = require('../controllers/auth.controller');

module.exports = (app) => {
    app.post('/api/auth/signup', AuthController.signup)
    app.post('/api/auth/signin', AuthController.signin)
    app.post('/api/auth/signout', AuthController.signout)
}