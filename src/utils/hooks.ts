/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

export default function useWindowSize(): { width: number; height: number } {
  if (typeof window !== 'undefined') {
    const [windowSize, setWindowSize] = React.useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    // eslint-disable-next-line no-inner-declarations
    function changeWindowSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    React.useEffect(() => {
      window.addEventListener('resize', changeWindowSize);

      return () => {
        window.removeEventListener('resize', changeWindowSize);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return windowSize;
  }
}
