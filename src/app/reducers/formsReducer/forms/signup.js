import { Map } from 'immutable';

import {
  isRequired,
  isEmail,
  minLength,
  matchesField,
} from '../validations'

export default Map({
  hasSubmitted: false,
  isTouched: false,
  isValid: false,
  fields: {
    email: {
      value: '',
      validations: [isRequired, isEmail],
      placeholder: 'name@email.com',
      type: 'email',
      errors: [],
    },
    password: {
      value: '',
      validations: [isRequired, minLength(8)],
      placeholder: 'abcd-1234-!#?$',
      type: 'password',
      errors: [],
    },
    confirmPassword: {
      value: '',
      validations: [isRequired, matchesField('password')],
      placeholder: 'name@email.com',
      type: 'password',
      errors: [],
    },
  },
});
