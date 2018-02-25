export const createStore = jest.fn((reducers, middleware) =>
  JSON.stringify({
    reducers,
    middleware,
  }),
);

export const applyMiddleware = jest.fn(middleware =>
  JSON.stringify(middleware),
);
