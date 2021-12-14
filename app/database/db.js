const { Sequelize, DataTypes } = require ('sequelize');
const config = require ('../../config/database');

const db = {}

db.connection = new Sequelize (
    config.database, config.username, config.password, config);

<<<<<<< HEAD


    //Vinculamos modelos
db.Client = require ('../models/Client')(db.connection, DataTypes)
db.Launch = require ('../models/Launch')(db.connection, DataTypes)

   
=======
    db.Client = require ('../models/Client')(db.connection, DataTypes);
    db.Launch = require ('../models/Launch')(db.connection, DataTypes);
    
>>>>>>> main
    //Asociar os modelos
db.Client.associate(db)
db.Launch.associate(db)

module.exports = db