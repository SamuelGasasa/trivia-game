"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TempRightAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TempRightAnswer.init(
    {
      answer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TempRightAnswer",
      underscored: true,
    }
  );
  return TempRightAnswer;
};
