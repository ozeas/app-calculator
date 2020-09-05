import { useState } from 'react';

import axios, { AxiosResponse } from '../api/axios';
import useRequestStatus from './use-request-status';

type UseRequestProps = {
  amount: number;
  installments: number;
  mdr: number;
  days?: Array<number>;
};

type UseRequestTypeReturn = {
  callRequest: () => Promise<AxiosResponse | void>;
  result: AxiosResponse | null;
  isLoading: boolean;
  isError: boolean;
  isSlow: boolean;
  hasTimeout: boolean;
};

const useRequest = (
  payload: UseRequestProps,
  params = ''
): UseRequestTypeReturn => {
  const {
    isLoading,
    isError,
    isSlow,
    hasTimeout,
    setIsError,
    setIsLoading,
    setHasTimeout,
    setIsSlow
  } = useRequestStatus();
  const [result, setResult] = useState<AxiosResponse | null>(null);

  const callRequest = async (): Promise<AxiosResponse | void> => {
    const checkSlowTime = setTimeout(() => {
      setIsSlow(true);
    }, 1500);

    try {
      setIsLoading(true);

      const { data } = await axios.post(params, payload);
      setResult(data);
      setIsLoading(false);
    } catch (error) {
      if (error.message.search('timeout') >= 0) {
        setHasTimeout(true);
        return;
      }

      setIsLoading(false);
      setIsError(true);
    } finally {
      clearTimeout(checkSlowTime);
    }
  };

  return {
    callRequest,
    result,
    isLoading,
    isError,
    isSlow,
    hasTimeout
  };
};

export default useRequest;
