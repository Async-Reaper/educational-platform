import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface BodyProps {
  isExpanded: boolean
  children: ReactNode
}

export const renderBodyDefault: React.FC<BodyProps> = ({ isExpanded, children }) => (
   <div className={styles.accordion__body} aria-expanded={isExpanded}>
      {children}
   </div>
);
