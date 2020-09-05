import { useState, useEffect } from 'react';

type UseOnlineProps = {
  isOnline: boolean;
  isOffline: boolean;
};

const useOnline = (): UseOnlineProps => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  window.addEventListener('offline', () => setIsOnline(false));
  window.addEventListener('online', () => setIsOnline(true));

  useEffect(() => {
    return (): void => {
      window.removeEventListener('offline', () => setIsOnline(false));
      window.removeEventListener('online', () => setIsOnline(true));
    };
  }, []);

  return {
    isOnline: isOnline === true,
    isOffline: isOnline === false
  };
};

export default useOnline;
