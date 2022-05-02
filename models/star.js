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
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: "post_id",
      references: {
        key: "id",
        model: "post_model"
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: "user_id",
      references: {
        key: "id",
        model: "user_model"
      }
    }
  };
  const options = {
    tableName: "star",
    comment: "",
    indexes: [{
      name: "user_id",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }, {
      name: "post_id",
      unique: false,
      type: "BTREE",
      fields: ["post_id"]
    }]
  };
  const StarModel = sequelize.define("star_model", attributes, options);
  return StarModel;
};