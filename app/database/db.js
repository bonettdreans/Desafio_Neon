const { Sequelize, DataTypes } = require ('sequelize');
const config = require ('../../config/database');

const db = {}

db.connection = new Sequelize (
    config.database, config.username, config.password, config);

    db.Client = require ('../models/Client')(db.connection, DataTypes);
    db.Launch = require ('../models/Launch')(db.connection, DataTypes);
    

module.exports = db