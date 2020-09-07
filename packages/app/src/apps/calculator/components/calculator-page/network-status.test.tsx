import React from 'react';
import { render } from '@testing-library/react';

import NetworkStatus from './network-status';

describe('NetworkStatus', () => {
  const $offline = /Você está offline/i;
  const $slow = /Sua conexão parece está lenta/i;
  const $timeout = /A API não conseguiu responder a tempo/i;
  const $error = /Houve um erro na simulação/i;

  describe('initial state', () => {
    it('should show empty state', () => {
      const { queryByText } = render(<NetworkStatus />);

      expect(queryByText($offline)).toBeNull();
      expect(queryByText($slow)).toBeNull();
      expect(queryByText($timeout)).toBeNull();
      expect(queryByText($error)).toBeNull();
    });
  });

  describe('status network', () => {
    it('should show offline network notification', () => {
      const { queryByText } = render(<NetworkStatus isOffline />);

      expect(queryByText($offline)).toBeInTheDocument();
    });

    it('should show slow network notification', () => {
      const { queryByText } = render(<NetworkStatus isSlow />);

      expect(queryByText($slow)).toBeInTheDocument();
    });

    it('should show request timeout notification', () => {
      const { queryByText } = render(<NetworkStatus hasTimeout />);

      expect(queryByText($timeout)).toBeInTheDocument();
    });

    it('should show error notification on response', () => {
      const { queryByText } = render(<NetworkStatus isError />);

      expect(queryByText($error)).toBeInTheDocument();
    });
  });
});
