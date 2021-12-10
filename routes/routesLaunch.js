const express = require("express");

const routesLaunch = express.Router();

const launchControllers = require("../app/controllers/launchControllers")

const app = express();

routesLaunch.get("/launch", launchControllers.findAll);

//routesLaunch.get("/operacao", launchControllers.findOne);

routesLaunch.get("/:id", launchControllers.findOne);

routesLaunch.post("/launch", launchControllers.createLaunch);

routesLaunch.put("/:id", launchControllers.updateLaunch);

routesLaunch.delete("/:id", launchControllers.deletLaunch);

module.exports = routesLaunch
