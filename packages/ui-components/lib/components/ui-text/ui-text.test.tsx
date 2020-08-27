import React from 'react';

import { renderWithTheme } from '../../../tests/utils';

import UIText from './ui-text';

describe('UIText', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { getByText } = renderWithTheme(<UIText>field input</UIText>);

      expect(getByText(/field/).textContent).toBe('field input');
    });

    it('should render default styles', () => {
      const { getByTestId } = renderWithTheme(
        <UIText data-testid="ui-label">field input</UIText>
      );

      expect(getByTestId('ui-label')).toHaveStyle(
        `font-size: 14px; color: #656565;`
      );
    });
  });
  describe('custom config', () => {
    test.each([
      ['color', 'red'],
      ['backgroundColor', 'yellow'],
      ['opacity', '0.1'],
      ['fontWeight', 'bold'],
      ['lineHeight', '130%'],
      ['letterSpacing', '-1px'],
      ['textAlign', 'left'],
      ['fontStyle', 'italic']
    ])('%#: should set custom property %s with %s value', (property, value) => {
      const { getByTestId } = renderWithTheme(
        <UIText data-testid="ui-label" {...{ [property]: value }}>
          field label
        </UIText>
      );

      expect(getByTestId('ui-label')).toHaveStyle(`${property}:${value}`);
    });
  });
});
