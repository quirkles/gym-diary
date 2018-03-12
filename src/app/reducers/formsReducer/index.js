import { Map } from 'immutable';

import { UPDATE_FORM_FIELD } from '../../actions/formActions';

const defaultState = Map({});

const formsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      return state;
    default:
      return state;
  }
};

export default formsReducer;
