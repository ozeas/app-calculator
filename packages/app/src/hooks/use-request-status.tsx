import { useState, Dispatch, SetStateAction } from 'react';

type UseRequestStatusType = {
  isLoading: boolean;
  isError: boolean;
  isSlow: boolean;
  hasTimeout: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsError: Dispatch<SetStateAction<boolean>>;
  setHasTimeout: Dispatch<SetStateAction<boolean>>;
  setIsSlow: Dispatch<SetStateAction<boolean>>;
};

const useRequestStatus = (): UseRequestStatusType => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [hasTimeout, setHasTimeout] = useState<boolean>(false);
  const [isSlow, setIsSlow] = useState<boolean>(false);

  return {
    isLoading,
    isError,
    isSlow,
    hasTimeout,
    setIsError,
    setIsLoading,
    setHasTimeout,
    setIsSlow
  };
};

export default useRequestStatus;
