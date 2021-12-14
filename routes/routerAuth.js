const express = require('express');
const routerAuth = express.Router();
const AuthController = require("../app/controllers/AuthClient");


routerAuth.post("/register", AuthController.singUp);
routerAuth.get("/login", AuthController.singIn);

module.exports = routerAuth