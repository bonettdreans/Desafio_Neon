const express = require('express');

const clientControllers = require('../app/controllers/clientControllers');
<<<<<<< HEAD

=======
>>>>>>> 429eff1b8e5f01ca6f06c94267c168d5d1384b5e

const auth = require ('../app/middlewares/auth')

const routerClient = express.Router();

routerClient.get("/api/client/:id", auth, clientControllers.findOne);
<<<<<<< HEAD

=======
>>>>>>> 429eff1b8e5f01ca6f06c94267c168d5d1384b5e


<<<<<<< HEAD
routerClient.get("/api/client/:id", clientControllers.findOne);

=======
>>>>>>> 429eff1b8e5f01ca6f06c94267c168d5d1384b5e

module.exports = routerClient