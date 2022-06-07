import { DataTypes, Model } from 'sequelize';
import db from '.';

class Task extends Model {}

Task.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  taskName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resolutionDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  resolutionTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'tasks',
  timestamps: false,
});

export default Task;