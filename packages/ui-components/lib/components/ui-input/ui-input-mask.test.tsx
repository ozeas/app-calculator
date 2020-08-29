import React from 'react';
import { fireEvent } from '@testing-library/react';

import { renderWithTheme } from '../../../tests/utils';

import UIInputMask from './ui-input-mask';

describe('UIInputMask', () => {
  describe('render mask inputs', () => {
    it('should render mask number by default', () => {
      const { getByTestId } = renderWithTheme(
        <UIInputMask label="Age" id="age" value="100" />
      );

      const element = getByTestId('input');
      fireEvent.change(element, { target: { value: '33,33' } });

      expect(getByTestId('input').value).toBe('33,33');
    });

    it('should render mask money', () => {
      const { getByTestId } = renderWithTheme(
        <UIInputMask label="Amount" id="amount" type="money" />
      );

      const element = getByTestId('input');
      fireEvent.change(element, { target: { value: '1000,30' } });

      expect(getByTestId('input').value).toBe('R$ 1.000,30');
    });

    it('should render mask percentage', () => {
      const { getByTestId } = renderWithTheme(
        <UIInputMask label="Amount" id="amount" type="percentage" />
      );

      const element = getByTestId('input');
      fireEvent.change(element, { target: { value: '100' } });

      expect(element.value).toBe('100%');
    });
  });
});
