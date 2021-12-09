'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class client extends Model {
    
    static associate(models) {
      client.hasMany(models.Launch, {as:"valor", foreignKey:"client_id"});
    }
  };
  client.init({
    Client_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    name: DataTypes.STRING,
    email:{ 
      type: DataTypes.STRING,
      isEmail: true,
    },
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'client',
  });
  return client;
};
