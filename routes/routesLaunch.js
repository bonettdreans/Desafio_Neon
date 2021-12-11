const express = require("express");

const launchControllers = require("../app/controllers/launchControllers")

const routesLaunch = express.Router();

routesLaunch.get("/launchs", launchControllers.findAll);

routesLaunch.get("/launch/:id", launchControllers.findOne);

routesLaunch.post("/launch/create", launchControllers.createLaunch);

routesLaunch.put("/launch/:id", launchControllers.updateLaunch);

routesLaunch.delete("/launch/:id", launchControllers.deletLaunch);

routesLaunch.get("/launch/operacao", launchControllers.saldo);

module.exports = routesLaunch
