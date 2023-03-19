'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherClassroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TeacherClassroom.belongsTo(models.Teacher);
      models.Teacher.hasMany(TeacherClassroom);
      TeacherClassroom.belongsTo(models.Classroom);
      models.Classroom.hasMany(TeacherClassroom);
    }
  }
  TeacherClassroom.init({
    teacherId: DataTypes.INTEGER,
    classroomId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'TeacherClassroom',
  });
  return TeacherClassroom;
};