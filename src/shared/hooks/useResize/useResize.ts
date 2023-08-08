import React from 'react';

export const useResize = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleSize = (event: UIEvent) => {
      const w = event.target as Window;
      setWidth(w.innerWidth);
    };

    window.addEventListener('resize', handleSize);

    return () => {
      window.addEventListener('resize', handleSize);
    };
  }, [setWidth]);

  return {
    width,
  };
};
