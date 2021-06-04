import { useState, useEffect } from 'react';

const useScrollPosition = (expanded: boolean): 'top' | 'bottom' => {
  const [scrollPosition, setScrollPosition] = useState<'top' | 'bottom'>(
    expanded ? 'top' : 'bottom'
  );

  useEffect(() => {
    const onScroll = (event: Event) => {
      event.preventDefault();

      if (window.pageYOffset < (window.innerHeight - 156) / 2) {
        setScrollPosition('bottom');
      } else {
        setScrollPosition('top');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
