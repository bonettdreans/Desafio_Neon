const express = require('express');

const clientControllers = require('../app/controllers/clientControllers');

const routerClient = express.Router();

routerClient.get("/clients", clientControllers.findAll);

routerClient.get("/client/:id", clientControllers.findOne);

routerClient.post("/client/Create", clientControllers.createUser);

routerClient.put("/client/:id", clientControllers.updateUser);

routerClient.delete("/client/:id", clientControllers.deletUser);

routerClient.get("/client/:id", clientControllers.operation);

module.exports = routerClient