import React, { useState } from 'react';
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

    it('should set defaultValue to uncontrolled input', () => {
      const { getByTestId } = renderWithTheme(
        <UIInput
          label="Username"
          id="user_name"
          defaultValue="Chadwick Boseman"
        />
      );

      expect(getByTestId('input').value).toBe('Chadwick Boseman');
    });

    it('should set value to controlled input', () => {
      const Component = () => {
        const [value, setValue] = useState('Chadwick Boseman');

        return (
          <UIInput
            label="Username"
            id="user_name"
            value={value}
            onChangeRequest={(e) => setValue(e)}
          />
        );
      };
      const { getByTestId } = renderWithTheme(<Component />);

      const inputElement = getByTestId('input');

      expect(inputElement.value).toBe('Chadwick Boseman');

      fireEvent.change(inputElement, { target: { value: 'Black Panther' } });

      expect(getByTestId('input').value).toBe('Black Panther');
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
});
