
const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/api/user', UserController.createUser)
    app.get('/api/user', UserController.getAllUser)
    app.get('/api/user/:id', UserController.getOneUser)
    app.patch('/api/user/edit/:id', UserController.updateUser)
    app.get('/api/user', UserController.index)
    
}