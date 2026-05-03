'use strict';

export async function up(queryInterface) {
  await queryInterface.renameColumn('habits', 'createdAt', 'created_at');
  await queryInterface.renameColumn('habits', 'updatedAt', 'updated_at');
}

export async function down(queryInterface) {
  await queryInterface.renameColumn('habits', 'created_at', 'createdAt');
  await queryInterface.renameColumn('habits', 'updated_at', 'updatedAt');
}
