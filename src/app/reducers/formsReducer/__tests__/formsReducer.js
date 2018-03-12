import { Map } from 'immutable';

import formsReducer from '../index';
import { UPDATE_FORM_FIELD } from '../../../actions/formActions';

describe('formsReducer', () => {
  describe('when there is no pre existing state', () => {
    const initialState = undefined;
    it('is initialized to expected shape when there is no action passed', () => {
      expect(formsReducer()).toEqual(Map({}));
    });
    it('is initialized to expected shape when an unexpected action is passed', () => {
      const action = {
        type: 'NONSENSE_ACTION_THAT_WILL_NEVER_BE_REAL',
      };
      const expectedFinalState = Map({});
      expect(formsReducer(initialState, action)).toEqual(expectedFinalState);
    });
    it('initializes state when passed updateFormField action with a form not in the default state', () => {
      const action = {
        type: UPDATE_FORM_FIELD,
        formData: {
          formName: 'formThatDefinitelyWontBeInDefault',
          fieldName: 'definitelyNotARealField',
          value: '223344',
        },
      };
    });
  });
});
