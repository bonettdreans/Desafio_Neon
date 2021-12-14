const express = require("express");

const launchControllers = require("../app/controllers/launchControllers")

<<<<<<< HEAD

=======
>>>>>>> 429eff1b8e5f01ca6f06c94267c168d5d1384b5e
const auth = require ('../app/middlewares/auth')

const routesLaunch = express.Router();

routesLaunch.get("/api/launch/:id", auth, launchControllers.clientLaunch);

routesLaunch.post("/api/lauch/", auth, launchControllers.createLaunch);

routesLaunch.put("/api/launch/:id", auth, launchControllers.updateLaunch);

routesLaunch.delete("/api/launch/:id", auth, launchControllers.deletLaunch);
<<<<<<< HEAD

const routesLaunch = express.Router();

routesLaunch.get("/api/launch/:id", launchControllers.clientLaunch);

routesLaunch.post("/api/lauch/", launchControllers.createLaunch);

routesLaunch.put("/api/launch/:id", launchControllers.updateLaunch);

routesLaunch.delete("/api/launch/:id", launchControllers.deletLaunch);

=======

>>>>>>> 429eff1b8e5f01ca6f06c94267c168d5d1384b5e

module.exports = routesLaunch
