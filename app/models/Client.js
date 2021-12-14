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
    client_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "O nome só pode conter letras"
        },
        len: {
          args: [2, 255],
          msg: "O nome minimo tem que conter dois caracteres"
        }
      }
    },
    email:{ 
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        isEmail: {
          msg: "O email tem que ser valido"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validade: {
        len: [6, 255],
        msg: "A senha tem que ter como minimo 6 caracteres"
      }
    },
  }, {
    sequelize,
    tableName: 'client',
  });
  return client;
};