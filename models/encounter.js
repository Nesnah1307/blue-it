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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      field: "user_id",
      references: {
        key: "id",
        model: "user_model"
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      field: "post_id",
      references: {
        key: "id",
        model: "post_model"
      }
    }
  };
  const options = {
    tableName: "encounter",
    comment: "",
    indexes: [{
      name: "post_id",
      unique: false,
      type: "BTREE",
      fields: ["post_id"]
    }, {
      name: "user_id",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }]
  };
  const EncounterModel = sequelize.define("encounter_model", attributes, options);
  return EncounterModel;
};