import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import axiosInstance from '../api/axios';
import useRequest from './use-request';

const axiosMock = new MockAdapter(axiosInstance);

describe('useRequest', () => {
  const payload = {
    amount: 15000,
    installments: 3,
    mdr: 4,
    days: [30, 60, 90]
  };

  describe('default states', () => {
    it('should return correctly initial states', () => {
      const { result } = renderHook(() => useRequest(payload));

      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.isError).toBeFalsy();
      expect(result.current.isSlow).toBeFalsy();
      expect(result.current.hasTimeout).toBeFalsy();
      expect(typeof result.current.callRequest).toBe('function');
    });
  });

  describe('on the call request', () => {
    beforeEach(() => {
      axiosMock.resetHistory();
    });

    afterAll(() => {
      axiosMock.reset();
    });

    it('should toggle isLoading', async () => {
      axiosMock.onPost('').reply(200);
      const { result, waitForNextUpdate } = renderHook(() =>
        useRequest(payload)
      );

      expect(result.current.isLoading).toBeFalsy();

      act(() => {
        result.current.callRequest();
      });
      expect(result.current.isLoading).toBeTruthy();

      await waitForNextUpdate();

      expect(result.current.isLoading).toBeFalsy();
    });

    it('should return response result', async () => {
      const resultData = { '30': 13824, '60': 14208, '90': 14400 };
      axiosMock.onPost('').reply(200, resultData);
      const { result, waitForNextUpdate } = renderHook(() =>
        useRequest(payload)
      );

      expect(result.current.result).toBeNull();

      act(() => {
        result.current.callRequest();
      });

      await waitForNextUpdate();

      expect(result.current.result).toEqual(resultData);
    });

    it('should set hasTimeout when response has timeout', async () => {
      axiosMock.onPost('').timeout();
      const { result, waitForNextUpdate } = renderHook(() =>
        useRequest(payload)
      );

      expect(result.current.hasTimeout).toBeFalsy();

      act(() => {
        result.current.callRequest();
      });

      await waitForNextUpdate();

      expect(result.current.hasTimeout).toBeTruthy();
    });

    it('should set isError when response has error', async () => {
      axiosMock.onPost('').reply(500);
      const { result, waitForNextUpdate } = renderHook(() =>
        useRequest(payload)
      );

      expect(result.current.isError).toBeFalsy();

      act(() => {
        result.current.callRequest();
      });

      await waitForNextUpdate();

      expect(result.current.isError).toBeTruthy();
    });

    it('should set isLow when response delay max 1,5 second', async () => {
      const axiosMockDelay = new MockAdapter(axiosInstance, {
        delayResponse: 2000
      });
      axiosMockDelay.onPost('').reply(200);

      const { result, waitForNextUpdate } = renderHook(() =>
        useRequest(payload)
      );

      expect(result.current.isSlow).toBeFalsy();

      act(() => {
        result.current.callRequest();
      });
      jest.clearAllTimers();

      await waitForNextUpdate();

      expect(result.current.isSlow).toBeTruthy();
    });
  });
});
