import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import routeReducer from '../index';

describe('route reducer', () => {
  it('generates the expected reducer', () => {
    expect(combineReducers).toHaveBeenCalledWith({
      router,
    });
    expect(routeReducer).toEqual({
      router,
    });
  });
});
