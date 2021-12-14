'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class launch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models)  {
<<<<<<< HEAD:app/models/launch.js
      launch.belongsTo(models.Client, {as:"Type", foreignKey:"client_id"})
=======
      launch.belongsTo(models.Client, {as:"balance", foreignKey:"client_id"})
>>>>>>> 50153fc34b680bf9cac569694a69f446b9c18313:app/models/Launch.js
  }
};
  launch.init({
    launch_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    amount: DataTypes.FLOAT,
    date: DataTypes.STRING,
    title_launch: DataTypes.STRING,
    type_launch: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'launch',
  });
  return launch;
};
