import { Map } from 'immutable';

export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';

const isObjectOrMap = data =>
  !!data && (Map.isMap(data) || data.toString() === '[object Object]');

export const updateFormField = formData => {
  let plainFormData = formData;
  if (!isObjectOrMap(formData)) {
    throw new Error(
      `updateFormField action requires a map or object to be passed, received: ${formData}`,
    );
  }
  if (formData.toJS) {
    plainFormData = formData.toJS();
  }
  const { formName, fieldName, value } = plainFormData;
  if (!(formName && fieldName && value)) {
    throw new Error(
      'updateFormField action requires a formName, fieldName and value',
    );
  }
  return {
    type: UPDATE_FORM_FIELD,
    formData: { formName, fieldName, value },
  };
};
