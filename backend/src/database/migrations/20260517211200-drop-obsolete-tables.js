'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const tables = await queryInterface.showAllTables();

    for (const tableName of ['Task', 'User', '_prisma_migrations']) {
      if (tables.includes(tableName)) {
        await queryInterface.dropTable(tableName);
      }
    }
  },

  async down() {
    // Old Prisma tables are intentionally not recreated by this Sequelize migration.
  },
};
