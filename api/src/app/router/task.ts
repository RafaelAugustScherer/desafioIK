import { Router } from 'express';

import TaskController from '../controller/task';
import TaskMiddleware from '../middleware/task';

const taskRouter = Router();

taskRouter.route('/task')
  .get(
    TaskController.getAll,
  )
  .post(
    TaskMiddleware.validateCreate,
    TaskController.create,
  );

taskRouter.route('/task/:id')
  .put(
    TaskMiddleware.validateUpdate,
    TaskController.update,
  );

export default taskRouter;