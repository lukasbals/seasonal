import { useEffect } from 'react';

const useResizeEventListener = (): void => {
  useEffect(() => {
    const resizeEventListener = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', resizeEventListener);

    return () => window.removeEventListener('resize', resizeEventListener);
  }, []);
};

export default useResizeEventListener;
