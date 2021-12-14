const express = require("express");

const launchControllers = require("../app/controllers/launchControllers")

<<<<<<< HEAD
<<<<<<< HEAD
const auth = require ('../app/middlewares/auth')

const routesLaunch = express.Router();

routesLaunch.get("/api/launch/:id", auth, launchControllers.clientLaunch);

routesLaunch.post("/api/lauch/", auth, launchControllers.createLaunch);

routesLaunch.put("/api/launch/:id", auth, launchControllers.updateLaunch);

routesLaunch.delete("/api/launch/:id", auth, launchControllers.deletLaunch);
=======
=======
>>>>>>> main
const routesLaunch = express.Router();

routesLaunch.get("/api/launch/:id", launchControllers.clientLaunch);

routesLaunch.post("/api/launch/", launchControllers.createLaunch);

routesLaunch.put("/api/launch/:id", launchControllers.updateLaunch);

routesLaunch.delete("/api/launch/:id", launchControllers.deletLaunch);
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main

module.exports = routesLaunch
