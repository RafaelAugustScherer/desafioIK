"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('tasks', [
            {
                name: 'Rafael A. Scherer',
                taskName: 'Tarefa Exemplo',
                resolutionDate: Sequelize.literal('CURRENT_TIMESTAMP'),
                resolutionTime: '15:00',
            },
        ], {});
    },
    async down(queryInterface) {
        await queryInterface.bulkDelete('tasks', { userId: 1 }, {});
    },
};
