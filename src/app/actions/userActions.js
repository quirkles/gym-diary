import { Map } from 'immutable';

export const UPDATE_USER = 'UPDATE_USER';

const isObjectOrMap = data =>
  !!data && (Map.isMap(data) || data.toString() === '[object Object]');

export const updateUser = userData => {
  if (!isObjectOrMap(userData)) {
    throw new Error(
      `updateUser action requires a map or object to be passed, received: ${userData}`,
    );
  }
  return {
    type: UPDATE_USER,
    userData,
  };
};
