import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({ children }: { children: ReactNode }) => {
  const parentNode = document.getElementById('modal') as Element;
  return createPortal(children, parentNode);
};
