export const routerMiddleware = jest.fn(
  history => `routerMiddleware with ${JSON.stringify(history)}`,
);
