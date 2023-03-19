'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('TeachersClassrooms', {
      fields: ['classroomId'],
      type: 'foreign key',
      name: 'teacherClassroom_classroom_association',
      references: {
        table: 'Classrooms',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('TeachersClassrooms', {
      fields: ['classroomId'],
      type: 'foreign key',
      name: 'teacherClassroom_classroom_association',
      references: {
        table: 'Classrooms',
        field: 'id'
      }
    });
  }
};
