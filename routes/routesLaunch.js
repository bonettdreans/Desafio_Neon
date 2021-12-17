const express = require("express");

const launchControllers = require("../app/controllers/launchControllers");

const auth = require ('../app/middlewares/auth');

const routesLaunch = express.Router();

routesLaunch.get("/api/client/:id/launch/", auth, launchControllers.clientLaunch);

routesLaunch.post("/api/launch/", auth, launchControllers.createLaunch);

routesLaunch.put("/api/launch/:id", auth, launchControllers.updateLaunch);

routesLaunch.delete("/api/launch/:id", auth, launchControllers.deletLaunch);

module.exports = routesLaunch;
