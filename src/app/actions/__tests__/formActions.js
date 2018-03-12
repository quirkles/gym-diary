import { Map } from 'immutable';

import { UPDATE_FORM_FIELD, updateFormField } from '../formActions';

describe('updateFormField action', () => {
  it('Throws an error if passed no argument', () => {
    expect(() => updateFormField()).toThrow(
      'updateFormField action requires a map or object to be passed, received: ',
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
      expect(() => updateFormField(arg)).toThrow(
        `updateFormField action requires a map or object to be passed, received: ${arg}`,
      );
    });
  });
  it('Throws an error if passed data missing either formName, fieldName, or value, plain js', () => {
    const badPayloads = [
      {},
      {
        fieldName: 'name',
        value: 'peter',
      },
      {
        formName: 'login',
        value: 'peter',
      },
      {
        formName: 'login',
        fieldName: 'name',
      },
      {
        fieldName: 'name',
      },
      {
        value: 'peter',
      },
      {
        formName: 'login',
      },
    ];
    expect.assertions(badPayloads.length);
    badPayloads.forEach(badPayload => {
      expect(() => updateFormField(badPayload)).toThrow(
        'updateFormField action requires a formName, fieldName and value',
      );
    });
  });
  it('Throws an error if passed data missing either formName, fieldName, or value, immutable', () => {
    const badPayloads = [
      {},
      {
        fieldName: 'name',
        value: 'peter',
      },
      {
        formName: 'login',
        value: 'peter',
      },
      {
        formName: 'login',
        fieldName: 'name',
      },
      {
        fieldName: 'name',
      },
      {
        value: 'peter',
      },
      {
        formName: 'login',
      },
    ];
    expect.assertions(badPayloads.length);
    badPayloads.forEach(badPayload => {
      expect(() => updateFormField(Map(badPayload))).toThrow(
        'updateFormField action requires a formName, fieldName and value',
      );
    });
  });
  it('Generate expected action when passed valid js payload', () => {
    const validPayload = {
      formName: 'login',
      fieldName: 'username',
      value: 'petey',
    };
    expect(updateFormField(validPayload)).toEqual({
      type: UPDATE_FORM_FIELD,
      formData: validPayload,
    });
  });
  it('Generate expected action when passed immutable payload', () => {
    const validPayload = {
      formName: 'login',
      fieldName: 'username',
      value: 'petey',
    };
    expect(updateFormField(Map(validPayload))).toEqual({
      type: UPDATE_FORM_FIELD,
      formData: validPayload,
    });
  });
  it('Generate expected action when passed valid js payload: ignores extra fields', () => {
    const validPayload = {
      formName: 'login',
      fieldName: 'username',
      value: 'petey',
      extra: 'blah',
    };
    expect(updateFormField(validPayload)).toEqual({
      type: UPDATE_FORM_FIELD,
      formData: {
        formName: 'login',
        fieldName: 'username',
        value: 'petey',
      },
    });
  });
  it('Generates expected action when passed immutable payload: ignores extra fields', () => {
    const validPayload = {
      formName: 'login',
      fieldName: 'username',
      value: 'petey',
      extra: 'blah',
    };
    expect(updateFormField(Map(validPayload))).toEqual({
      type: UPDATE_FORM_FIELD,
      formData: {
        formName: 'login',
        fieldName: 'username',
        value: 'petey',
      },
    });
  });
});
