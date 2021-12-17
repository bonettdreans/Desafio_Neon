const express = require('express');
const routerAuth = express.Router();
const AuthController = require("../app/controllers/AuthClient");


routerAuth.post("/api/register", AuthController.singUp);
routerAuth.post("/api/login", AuthController.singIn);

module.exports = routerAuth;