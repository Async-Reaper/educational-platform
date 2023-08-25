import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
   children: ReactNode;
   element?: HTMLElement;
}

const Component = (props: PortalProps) => {
   const {
      children,
      element = document.body,
   } = props;

   return createPortal(children, element);
};

export const Portal = Component;
