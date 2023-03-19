'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('TeachersClassrooms', {
      fields: ['teacherId'],
      type: 'foreign key',
      name: 'teacherClassroom_teacher_association',
      references: {
        table: 'Teachers',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('TeachersClassrooms', {
      fields: ['teacherId'],
      type: 'foreign key',
      name: 'teacherClassroom_teacher_association',
      references: {
        table: 'Teachers',
        field: 'id'
      }
    });
  }
};
