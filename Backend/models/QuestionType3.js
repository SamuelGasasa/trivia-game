"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuestionType3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QuestionType3.init(
    {
      question: DataTypes.STRING,
      operator: DataTypes.BOOLEAN,
      field: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "QuestionType3",
      tableName: "question-type3",
      underscored: true,
    }
  );
  return QuestionType3;
};
