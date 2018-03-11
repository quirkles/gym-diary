import { Map } from 'immutable';

import userReducer from '../userReducer';

import { updateUser } from '../../actions/userActions';

describe('user reducer', () => {
  describe('when there is no pre existing state', () => {
    const initialState = undefined;
    it('is initialized to expected shape when there is no action passed', () => {
      expect(userReducer()).toEqual(
        Map({
          userName: '',
          password: '',
          emailAddress: '',
          authenticated: false,
        }),
      );
    });
    it('is initialized to expected shape when an unexpected action is passed', () => {
      const action = {
        type: 'NONSENSE_ACTION_THAT_WILL_NEVER_BE_REAL',
      };
      const expectedFinalState = Map({
        userName: '',
        password: '',
        emailAddress: '',
        authenticated: false,
      });
      expect(userReducer(initialState, action)).toEqual(expectedFinalState);
    });
    it('handles update user action', () => {
      const action = updateUser({
        userName: 'petey',
      });
      const expectedFinalState = Map({
        userName: 'petey',
        password: '',
        emailAddress: '',
        authenticated: false,
      });
      expect(userReducer(initialState, action)).toEqual(expectedFinalState);
    });
  });
});
