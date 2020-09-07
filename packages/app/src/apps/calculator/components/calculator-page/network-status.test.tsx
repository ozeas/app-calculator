import React from 'react';
import { render } from '@testing-library/react';

import NetworkStatus from './network-status';

describe('NetworkStatus', () => {
  describe('initial state', () => {
    it('should show empty state', () => {
      const { queryByText } = render(<NetworkStatus />);

      expect(queryByText(/Você está offline/i)).toBeNull();
      expect(queryByText(/Sua conexão parece está lenta/i)).toBeNull();
      expect(queryByText(/A API não conseguiu responder a tempo/i)).toBeNull();
      expect(queryByText(/Houve um erro na simulação/i)).toBeNull();
    });
  });

  describe('status network', () => {
    it('should show offline network notification', () => {
      const { queryByText } = render(<NetworkStatus isOffline />);

      expect(queryByText(/Você está offline/i)).toBeInTheDocument();
    });

    it('should show slow network notification', () => {
      const { queryByText } = render(<NetworkStatus isSlow />);

      expect(queryByText(/Sua conexão parece está lenta/i)).toBeInTheDocument();
    });

    it('should show request timeout notification', () => {
      const { queryByText } = render(<NetworkStatus hasTimeout />);

      expect(
        queryByText(/A API não conseguiu responder a tempo/i)
      ).toBeInTheDocument();
    });

    it('should show error notification on response', () => {
      const { queryByText } = render(<NetworkStatus isError />);

      expect(queryByText(/Houve um erro na simulação/i)).toBeInTheDocument();
    });
  });
});
