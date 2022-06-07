import Joi from 'joi';

const create = Joi.object({
  name: Joi.string().required(),
  taskName: Joi.string().required(),
  resolutionDate: Joi.date().required(),
  resolutionTime: Joi.string().required(),
});

const update = Joi.object({
  id: Joi.number(),
  name: Joi.string(),
  taskName: Joi.string(),
  resolutionDate: Joi.date(),
  resolutionTime: Joi.string(),
});

export default {
  create,
  update,
};