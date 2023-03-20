'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Sessions', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'session_user_association',
      references: {
        table: 'Users',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Sessions', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'session_user_association',
      references: {
        table: 'Users',
        field: 'id'
      }
    });}
};
