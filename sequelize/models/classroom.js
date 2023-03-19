'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Classroom.belongsTo(models.School);
      models.School.hasMany(Classroom);
    }
  }
  Classroom.init({
    name: DataTypes.STRING,
    schedule: DataTypes.TEXT,
    protocol: DataTypes.TEXT,
    capacity: DataTypes.INTEGER,
    blocked: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Classroom',
  });
  return Classroom;
};