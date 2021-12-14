const express = require('express');

const clientControllers = require('../app/controllers/clientControllers');
<<<<<<< HEAD
<<<<<<< HEAD

const auth = require ('../app/middlewares/auth')

const routerClient = express.Router();

routerClient.get("/api/client/:id", auth, clientControllers.findOne);
=======
=======
>>>>>>> main

const routerClient = express.Router();

routerClient.get("/api/client/:id", clientControllers.findOne);
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main

module.exports = routerClient