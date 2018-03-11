import { Map } from 'immutable';
import { UPDATE_USER, updateUser } from '../userActions';

describe('updateUser action', () => {
  it('Throws an error if passed no argument', () => {
    expect(() => updateUser()).toThrow(
      'updateUser action requires a map or object to be passed, received: ',
    );
  });
  it('Throws an error if passed bad argument type', () => {
    const badArgumentList = [
      true,
      false,
      '',
      'word',
      0,
      1,
      [],
      ['thing'],
      null,
      undefined,
    ];
    expect.assertions(badArgumentList.length);
    badArgumentList.forEach(arg => {
      expect(() => updateUser(arg)).toThrow(
        `updateUser action requires a map or object to be passed, received: ${arg}`,
      );
    });
  });
  it('Generates expected action when passed plain object', () => {
    const userData = {
      password: 'passy',
    };
    const expectedAction = {
      type: UPDATE_USER,
      userData: {
        password: 'passy',
      },
    };
    expect(updateUser(userData)).toEqual(expectedAction);
  });
  it('Generates expected action when passed immutable Map', () => {
    const userData = Map({
      email: 'me@email.com',
    });
    const expectedAction = {
      type: UPDATE_USER,
      userData: Map({
        email: 'me@email.com',
      }),
    };
    expect(updateUser(userData)).toEqual(expectedAction);
  });
});
