'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Posts', 'authorId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id'
      }
    });
    await queryInterface.removeColumn('Posts', 'author')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Posts', 'author', {
      type: Sequelize.INTEGER
    });
    await queryInterface.removeColumn('Posts', 'authorId')
  }
};
