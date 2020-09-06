import { useState } from 'react';

import axios, { AxiosResponse } from '../api/axios';
import useRequestStatus from './use-request-status';

type UseRequestProps = {
  amount?: number;
  installments?: number;
  mdr?: number;
  days?: Array<number>;
};

type ResultType = {
  [key: string]: number;
};

export type UseRequestTypeReturn = {
  callRequest: (payload: UseRequestProps) => Promise<AxiosResponse | void>;
  result: ResultType;
  isLoading: boolean;
  isError: boolean;
  isSlow: boolean;
  hasTimeout: boolean;
};

const useRequest = (params = ''): UseRequestTypeReturn => {
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
  const [result, setResult] = useState<ResultType>({});

  const callRequest = async (
    payload: UseRequestProps
  ): Promise<AxiosResponse | void> => {
    const checkSlowNetwork = setTimeout(() => {
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
      clearTimeout(checkSlowNetwork);
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
