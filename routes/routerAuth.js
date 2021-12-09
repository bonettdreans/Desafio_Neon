const express = require('express');

const routerAuth = express.Router();


//controllers
const AuthController = require ('../app/controllers/AuthClient');

// Login e register

//api/singin & /api/singup
routerAuth.post('/', AuthController.singIn);
routerAuth.post('/api/singup', AuthController.singUp);

module.exports = routerAuth