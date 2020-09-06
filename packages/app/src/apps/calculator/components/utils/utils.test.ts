import validate from './validate';
import parseValuesForm from './parse-values-form';

describe('Utils', () => {
  describe('validate', () => {
    test.each([
      [
        { amount: undefined, installments: undefined, mdr: undefined },
        {
          fields: { amount: true, installments: true, mdr: true },
          isValid: false
        }
      ],
      [
        { amount: '140.00', installments: '3', mdr: '2' },
        {
          fields: {},
          isValid: true
        }
      ],
      [
        { amount: '200', installments: '2', mdr: undefined },
        {
          fields: { mdr: true },
          isValid: false
        }
      ],
      [
        { amount: '200', installments: '', mdr: '1' },
        {
          fields: { installments: true },
          isValid: false
        }
      ],
      [
        { amount: '', installments: '5', mdr: '4' },
        {
          fields: { amount: true },
          isValid: false
        }
      ]
    ])('%# should valid(%s) return %s', (props, result) => {
      expect(validate(props)).toEqual(result);
    });
  });

  describe('parseValuesForm', () => {
    test.each([
      [{ amount: 'R$ 0' }, { amount: '0' }],
      [{ amount: 'R$ 1500,00' }, { amount: '1500.00' }],
      [{ amount: 'R$ 1.000.500,90' }, { amount: '1000500.90' }],
      [{ installments: '4' }, { installments: 4 }],
      [{ installments: '3,5' }, { installments: 3 }],
      [{ mdr: '4%' }, { mdr: 4 }],
      [{ mdr: '4,4%' }, { mdr: 4.4 }],
      [{ days: '1, 15, 30, 60, 90' }, { days: [1, 15, 30, 60, 90] }],
      [{ days: '1, aaaa, false, mama, 90' }, { days: [1, 90] }],
      [{ days: 'jaja, aaaa, false, mama' }, { days: [] }]
    ])('%# should parseValuesForm(%o) return %o', (props, result) => {
      expect(parseValuesForm(props)).toEqual(result);
    });
  });
});
