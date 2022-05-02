const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      field: "username"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      field: "email"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      field: "password"
    },
    membership: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: "membership"
    },
    level_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: "level_id",
      references: {
        key: "id",
        model: "level_model"
      }
    }
  };
  const options = {
    tableName: "user",
    comment: "",
    indexes: [{
      name: "level_id",
      unique: false,
      type: "BTREE",
      fields: ["level_id"]
    }]
  };
  const UserModel = sequelize.define("user_model", attributes, options);
  return UserModel;
};