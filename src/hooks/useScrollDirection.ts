import { useState, useEffect } from 'react';

const useScrollDirection = (): 'up' | 'down' | undefined => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>();

  const listener = () => {
    setScrollDirection(lastScrollTop > window.pageYOffset ? 'down' : 'up');
    setLastScrollTop(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return scrollDirection;
};

export default useScrollDirection;
