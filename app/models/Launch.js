'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class launch extends Model {
   
    static associate(models)  {
      launch.belongsTo(models.Client, {as:"balance", foreignKey:"client_id"})
  }
};
  launch.init({
    launch_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    amount: DataTypes.INTEGER,
    date: DataTypes.STRING,
    title_launch: DataTypes.STRING,
    type_launch: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'launch',
  });
  return launch;
};
