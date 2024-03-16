const express = require('express');
// import {signup} from "../controllers/auth.controller";
// const router = express.router();

// router.post("/signup",signup);


const { authenticate } = require('../config/jwt.config');
const AuthController = require('../controllers/auth.controller');
const { checkpermission} = require('../middleware/auth.middleware');

module.exports = (app) => {
    app.post('/api/auth/signup', AuthController.signup);
    app.post('/api/auth/signin', AuthController.signin);
    app.post('/api/auth/signout', AuthController.signout);
    app.get('/api/auth',authenticate, checkpermission('admin', 'manager'), AuthController.getAllAuth);
    app.get('/api/auth/:id',authenticate, AuthController.getOneAuth);
    app.patch('/api/auth/:id',authenticate, AuthController.updateAuth);
    app.delete('/api/auth/:id', authenticate, AuthController.deleteAuth);
};

