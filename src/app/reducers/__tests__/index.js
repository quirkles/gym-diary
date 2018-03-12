import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import user from '../userReducer';
import forms from '../formsReducer';

import rootReducer from '../index';

describe('route reducer', () => {
  it('generates the expected reducer', () => {
    expect(combineReducers).toHaveBeenCalledWith({
      router,
      user,
      forms,
    });
    expect(rootReducer).toEqual({
      router,
      user,
      forms,
    });
  });
});
