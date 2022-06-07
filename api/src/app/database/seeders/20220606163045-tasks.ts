import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: any) {
    await queryInterface.bulkInsert('tasks', [
      {
        name: 'Rafael A. Scherer',
        taskName: 'Tarefa Exemplo',
        resolutionDate: Sequelize.literal('CURRENT_TIMESTAMP'),
        resolutionTime: '15:00',
      },
    ], {});
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('tasks', { userId: 1 }, {});
  },
};