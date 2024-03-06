const AuthController = require('../controllers/auth.controller');

module.exports = (app) => {
    app.post('/api/auth/signup', AuthController.signup);
    app.post('/api/auth/signin', AuthController.signin);
    app.post('/api/auth/signout', AuthController.signout);
    app.get('/api/auth', AuthController.getAllAuth);
    app.get('/api/auth/:id', AuthController.getOneAuth);
    app.patch('/api/auth/:id', AuthController.updateAuth);
    app.delete('/api/auth/:id', AuthController.deleteAuth);
};