const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Encounter extends Model {}

  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: 'id',
        model: 'user',
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: 'id',
        model: 'post',
      },
    },
  };
  const options = {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'encounter',
  };

Encounter.init(attributes, options);
module.exports = Encounter;