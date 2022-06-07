"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Task extends sequelize_1.Model {
}
Task.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    taskName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    resolutionDate: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    resolutionTime: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'tasks',
    timestamps: false,
});
exports.default = Task;
