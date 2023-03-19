'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Classrooms', {
      fields: ['schoolId'],
      type: 'foreign key',
      name: 'classroom_school_association',
      references: {
        table: 'Schools',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Classrooms', {
      fields: ['schoolId'],
      type: 'foreign key',
      name: 'classroom_school_association',
      references: {
        table: 'Schools',
        field: 'id'
      }
    });
  }
};
