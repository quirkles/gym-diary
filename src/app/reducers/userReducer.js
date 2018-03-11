import { Map } from 'immutable';

import { UPDATE_USER } from '../actions/userActions';

const defaultState = Map({
  userName: '',
  password: '',
  emailAddress: '',
  authenticated: false,
});

const userReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case UPDATE_USER:
      return state.merge(action.userData);
    default:
      return state;
  }
};

export default userReducer;
