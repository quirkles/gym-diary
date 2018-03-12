import { fromJS } from 'immutable';
import { isRequired, isEmail } from '../validations';

describe('Validations', () => {
  describe('isRequired', () => {
    it('returns null when the field is valid', () => {
      const invalidFormData = {
        fields: {
          name: {
            value: 'name',
          },
        },
      };
      const validateName = isRequired('name');
      expect(validateName(invalidFormData)).toEqual(null);
    });
    it('returns expected error when the field is missing', () => {
      const invalidFormData = {
        fields: {
          notTheName: {
            value: 'something',
          },
        },
      };
      const validateName = isRequired('name');
      expect(validateName(invalidFormData)).toEqual('This field is required.');
    });
    it('returns expected error when the field is empty string', () => {
      const invalidFormData = {
        fields: {
          name: {
            value: '',
          },
        },
      };
      const validateName = isRequired('name');
      expect(validateName(invalidFormData)).toEqual('This field is required.');
    });
  });
  describe('isEmail', () => {
    it('recognizes good emails', () => {
      const goodEmailList = [
        'name@email.com',
        'peter.smith@gmail.co.uk',
        'my-email@yahoo.ie',
      ];
      expect.assertions(goodEmailList.length);
      const formDataTemplate = fromJS({
        fields: {
          email: {
            value: 'VALUE_HERE',
          },
        },
      });
      const validateEmail = isEmail('email');
      goodEmailList.forEach(goodEmail => {
        const formData = formDataTemplate.setIn(
          ['fields', 'email', 'value'],
          goodEmail,
        );
        expect(validateEmail(formData)).toEqual(null);
      });
    });
    it('recognizes bad emails', () => {
      const goodEmailList = [
        'nameemail.com',
        'peter.smith',
        'my-email@yahoo@this@that',
        'noemail',
        '....@@@@....',
      ];
      expect.assertions(goodEmailList.length);
      const formDataTemplate = fromJS({
        fields: {
          email: {
            value: 'VALUE_HERE',
          },
        },
      });
      const validateEmail = isEmail('email');
      goodEmailList.forEach(goodEmail => {
        const formData = formDataTemplate.setIn(
          ['fields', 'email', 'value'],
          goodEmail,
        );
        expect(validateEmail(formData)).toEqual('Must be a valid email.');
      });
    });
  });
});
