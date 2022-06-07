const Error = (code: number, message: string) => ({
  code,
  message,
  isExpected: true,
});

export const ERRORS = {
  TASK: {
    NOT_FOUND: Error(404, 'Task not found'),
  },
};