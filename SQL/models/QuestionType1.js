"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuestionType1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QuestionType1.init(
    {
      question: DataTypes.STRING,
      field: DataTypes.STRING,
      operator: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "QuestionType1",
      tableName: "question-type1",
      underscored: true,
    }
  );
  return QuestionType1;
};
