const express = require("express");

const launchControllers = require("../app/controllers/launchControllers")

const routesLaunch = express.Router();

routesLaunch.get("/api/launch/:id", launchControllers.clientLaunch);

routesLaunch.post("/api/launch/", launchControllers.createLaunch);

routesLaunch.put("/api/launch/:id", launchControllers.updateLaunch);

routesLaunch.delete("/api/launch/:id", launchControllers.deletLaunch);

module.exports = routesLaunch
