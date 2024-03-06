
const { authenticate } = require('../config/jwt.config');
const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/api/user', authenticate, UserController.createUser)
    app.get('/api/user', authenticate, UserController.getAllUser)
    app.get('/api/user/:id', authenticate, UserController.getOneUser)
    app.patch('/api/user/edit/:id', authenticate, UserController.updateUser)
    app.get('/api/user', UserController.index)
    
}