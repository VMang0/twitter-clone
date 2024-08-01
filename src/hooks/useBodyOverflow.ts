import { useEffect } from 'react';

export const useBodyOverflow = (isHidden: boolean) => {
  const setBodyOverflow = (body: HTMLElement | null, isHidden: boolean) => {
    if (body) {
      body.style.overflow = isHidden ? 'hidden' : 'auto';
    }
  };

  useEffect(() => {
    const body: HTMLElement | null = document.querySelector('body');
    setBodyOverflow(body, isHidden);

    return () => {
      setBodyOverflow(body, false);
    };
  }, [isHidden]);
};
