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
      field: "id"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      field: "name"
    }
  };
  const options = {
    tableName: "level",
    comment: "",
    indexes: []
  };
  const LevelModel = sequelize.define("level_model", attributes, options);
  return LevelModel;
};