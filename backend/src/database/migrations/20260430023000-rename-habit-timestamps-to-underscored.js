'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.renameColumn('habits', 'createdAt', 'created_at');
    await queryInterface.renameColumn('habits', 'updatedAt', 'updated_at');
  },

  async down(queryInterface) {
    await queryInterface.renameColumn('habits', 'created_at', 'createdAt');
    await queryInterface.renameColumn('habits', 'updated_at', 'updatedAt');
  },
};
