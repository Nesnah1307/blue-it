const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      // this means the password must be at least four characters long
      len: [5, 10],
    },
  },
  membership: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
};
const options = {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'user',
};

User.init(attributes, options);
module.exports = User;
