import { RequestHandler } from 'express';
import TaskService from '../service/task';

const getAll: RequestHandler = async (_req, res) => {
  const response = await TaskService.getAll();

  return res.status(200).json(response);
};

const create: RequestHandler = async (_req, res) => {
  const { payload } = res.locals;
  const response = await TaskService.create(payload);
  
  return res.status(201).json(response);
};

const update: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { payload } = res.locals;
  const response = await TaskService.update(+id, payload);

  return res.status(200).json(response);
};

export default {
  getAll,
  create,
  update,
};

