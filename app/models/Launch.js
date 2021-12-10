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
      launch.belongsTo(models.Client, {as:"Type", foreignKey:"client_id"})
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
