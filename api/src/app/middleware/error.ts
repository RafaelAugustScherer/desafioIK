import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
  if (err.isJoi) {
    const { message } = err.details[0];
    return res.status(400).json({ error: message });
  }
  if (err.isExpected) {
    const { code, message } = err;
    return res.status(code).json({ message });
  }

  console.error(err);
  return res.status(500).end();
};

export default errorMiddleware;