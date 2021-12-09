const express = require('express');

const routerAuth = express.Router();


//controllers
const AuthController = require ('../app/controllers/AuthClient');

// Login e register

//api/singin & /api/singup
routerAuth.post('/api', AuthController.singIn);
routerAuth.post('/api/signup', AuthController.singUp);

module.exports = routerAuth