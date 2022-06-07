"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('tasks', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            taskName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            resolutionDate: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            resolutionTime: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('tasks');
    },
};
