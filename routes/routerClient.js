const express = require('express');

const clientControllers = require('../app/controllers/clientControllers');

const routerClient = express.Router();

routerClient.get("/client", clientControllers.findAll);

routerClient.get("/:id", clientControllers.findOne);

routerClient.post("/Create", clientControllers.createUser);

routerClient.put("/:id", clientControllers.updateUser);

routerClient.delete("/:id", clientControllers.deletUser);

routerClient.delete("/:id", clientControllers.operation);

module.exports = routerClient