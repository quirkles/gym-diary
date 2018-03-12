import { path } from 'ramda';

const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); //eslint-disable-line

export const isRequired = fieldName => formData => {
  const value = formData.getIn(['fields', fieldName, 'value']);
  return value && value.length > 0 ? null : 'This field is required.';
};

export const isEmail = fieldName => formData => {
  const value = formData.getIn(['fields', fieldName, 'value']);
  return emailRegex.test(value) ? null : 'Must be a valid email.';
};
export const minLength = length => fieldName => formData => {
  const value = formData.getIn(['fields', fieldName, 'value'], '');
  return value.length >= length
    ? null
    : `This field must be at least ${length} characters in length.`;
};

export const matchesField = targetField => fieldName => formData => {
  const value = formData.getIn(['fields', fieldName, 'value'], '');
  const targetValue = path('', ['fields', targetField, 'value'], formData);
  return value === targetValue
    ? null
    : `This field must match the ${targetField} field.`;
};
