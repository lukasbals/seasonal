import { useEffect } from 'react';

const useResizeEventListener = (): void => {
  useEffect(() => {
    const onResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    onResize();
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);
};

export default useResizeEventListener;
