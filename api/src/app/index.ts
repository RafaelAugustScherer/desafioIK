import Express from 'express';
import cors from 'cors';
import appRouter from './router';

const app = Express();
app.use(Express.json());
app.use(cors());

app.use(appRouter);

export default app;