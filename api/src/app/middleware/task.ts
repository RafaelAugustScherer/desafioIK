import { RequestHandler } from 'express';
import TaskSchema from '../schema/task';

const validateCreate: RequestHandler = async (req, res, next) => {
  const { name, taskName, resolutionDate, resolutionTime } = req.body;

  const payload = await TaskSchema.create.validateAsync({ name, taskName, resolutionDate, resolutionTime });
  res.locals.payload = payload;
  
  return next();
};

const validateUpdate: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  const { id: _id, ...payload } = await TaskSchema.update.validateAsync(
    { id, ...req.body },
  );

  res.locals.payload = payload;

  return next();
};

export default {
  validateCreate,
  validateUpdate,
};