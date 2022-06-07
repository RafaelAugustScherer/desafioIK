import Task from '../database/models/task';
import { ERRORS } from '../utils/error';

const getAll = async () => Task.findAll();

const create = async (payload: Task) => Task.create({ ...payload });

const update = async (id: number, payload: Partial<Task>) => {
  const taskToUpdate = await Task.findByPk(id);

  if (!taskToUpdate) throw ERRORS.TASK.NOT_FOUND;
  const task = taskToUpdate.get();

  await Task.update({ ...payload }, { where: { id } });
  return { ...task, ...payload };
};

export default {
  getAll,
  create,
  update,
};