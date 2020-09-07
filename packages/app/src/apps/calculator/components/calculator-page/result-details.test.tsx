import React from 'react';
import { render } from '@testing-library/react';

import ResultDetails from './result-details';

describe('ResultDetails', () => {
  describe('initial state', () => {
    it('should render initial state', () => {
      const { getByTestId } = render(<ResultDetails />);

      expect(getByTestId('tomorrow')).toBeInTheDocument();
      expect(getByTestId('15')).toBeInTheDocument();
      expect(getByTestId('30')).toBeInTheDocument();
      expect(getByTestId('90')).toBeInTheDocument();
    });
  });

  describe('default results', () => {
    it('should render default results', () => {
      const defaultResults = {
        1: 1000,
        15: 1100,
        30: 1200,
        90: 1300
      };
      const { getByTestId } = render(<ResultDetails result={defaultResults} />);

      expect(getByTestId('tomorrow').textContent).toMatch('10.00');
      expect(getByTestId('15').textContent).toMatch('11.00');
      expect(getByTestId('30').textContent).toMatch('12.00');
      expect(getByTestId('90').textContent).toMatch('13.00');
    });

    it('should render varied results', () => {
      const propResultDetails = {
        5: 1000,
        6: 1100,
        9: 1200,
        12: 1300,
        30: 1400,
        45: 1500
      };

      const results = {
        5: '10.00',
        6: '11.00',
        9: '12.00',
        12: '13.00',
        30: '14.00',
        45: '15.00'
      };
      const { getByTestId, queryByTestId } = render(
        <ResultDetails result={propResultDetails} />
      );

      Object.entries(results).forEach(([day, value]) => {
        expect(getByTestId(day).textContent).toMatch(value);
      });
      expect(queryByTestId('tomorrow')).toBeNull();
    });
  });
});
