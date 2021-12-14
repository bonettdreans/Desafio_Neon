const express = require('express');

const clientControllers = require('../app/controllers/clientControllers');

const auth = require ('../app/middlewares/auth')

const routerClient = express.Router();


routerClient.get("/api/client/:id", auth, clientControllers.findOne);


routerClient.get("/api/client/:id", clientControllers.findOne);



module.exports = routerClient