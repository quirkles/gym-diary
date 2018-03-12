import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import user from './userReducer';
import forms from './formsReducer';

const rootReducer = combineReducers({
  router,
  user,
  forms,
});

export default rootReducer;
