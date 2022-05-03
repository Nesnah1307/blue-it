const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Type extends Model {}


  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  };
  const options = {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'type',
  };

Type.init(attributes, options);
module.exports =Type;