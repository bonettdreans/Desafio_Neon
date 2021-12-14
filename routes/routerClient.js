const express = require('express');

const clientControllers = require('../app/controllers/clientControllers');
<<<<<<< HEAD

const auth = require ('../app/middlewares/auth')

const routerClient = express.Router();

routerClient.get("/api/client/:id", auth, clientControllers.findOne);
=======

const routerClient = express.Router();

routerClient.get("/api/client/:id", clientControllers.findOne);
>>>>>>> main

module.exports = routerClient