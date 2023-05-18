"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    static associate(models) {}
  }
  Allcode.init(
    {
      key: DataTypes.STRING,
      type: DataTypes.STRING,
      value_Vi: DataTypes.STRING,
      value_En: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Allcode",
    }
  );
  return Allcode;
};
