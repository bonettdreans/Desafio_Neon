const express = require('express');

const clientControllers = require('../app/controllers/clientControllers');

const routerClient = express.Router();

routerClient.get("/api/client/:id", clientControllers.findOne);


module.exports = routerClient