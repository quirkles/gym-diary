/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

import routes from './routes';

const rootEl = document.getElementById('app');


/*
configureStore takes 3 args, the root reducer, init store state, and additional middlewares
by default, configureStore comes with redux-logger middleware. Here we
registering our fetchMiddleware
*/

ReactDOM.hydrate(
  <Provider store={{}}>
    <Router history={history} routes={routes} />
  </Provider>,
  rootEl
);