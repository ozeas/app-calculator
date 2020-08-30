import React from 'react';
import { fireEvent } from '@testing-library/react';

import { renderWithTheme } from '../../../tests/utils';

import UIInput from './ui-input';

describe('UIInput', () => {
  describe('render', () => {
    it('should render default properties', () => {
      const { getByTestId } = renderWithTheme(
        <UIInput label="Username" id="user_name" />
      );
      const labelElement = getByTestId('label');
      const inputElement = getByTestId('input');

      expect(labelElement).toBeVisible();
      expect(labelElement.textContent).toBe('Username');
      expect(labelElement.htmlFor).toBe('user_name');

      expect(inputElement).toBeVisible();
      expect(inputElement.error).toBeFalsy();
      expect(inputElement.id).toBe('user_name');
      expect(inputElement.required).toBeFalsy();
      expect(inputElement).toHaveAttribute('width', '251px');
    });
  });

  describe('custom properties', () => {
    it('should set required input', () => {
      const { getByTestId } = renderWithTheme(
        <UIInput label="Email" id="email" required />
      );

      expect(getByTestId('input').required).toBeTruthy();
    });

    it('should set required input', () => {
      const { getByTestId } = renderWithTheme(
        <UIInput label="Email" id="email" required />
      );

      expect(getByTestId('input').required).toBeTruthy();
    });

    it('should set error input', () => {
      const { getByTestId } = renderWithTheme(
        <UIInput label="Email" id="email" error />
      );

      expect(getByTestId('input')).toHaveStyle('border: 1px solid #F38D77');
      expect(getByTestId('label')).toHaveStyle('color: #F38D77');
    });

    it('should set width input', () => {
      const { getByTestId } = renderWithTheme(
        <UIInput label="Email" id="email" width="300px" />
      );

      expect(getByTestId('input')).toHaveStyle('width: 300px');
    });
  });

  describe('call callback', () => {
    it('should call onChange callback', () => {
      const onChange = jest.fn();

      const { getByTestId } = renderWithTheme(
        <UIInput label="Email" id="email" width="300px" onChange={onChange} />
      );
      fireEvent.change(getByTestId('input'), {
        target: { value: 'test@example.com' }
      });

      expect(onChange).toHaveBeenCalled();
    });
  });
});
