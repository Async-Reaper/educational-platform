import React from 'react';
import cls from './styles.module.scss';

interface BodyProps {
  isExpanded: boolean
  notification: string[]
}

export const renderBodyDefault: React.FC<BodyProps> = ({ isExpanded, notification }) => {
  if (!notification.length) {
    return null;
  }

  return (
     <div className={cls.notification__body__container}>
        {notification.map((item) => (
           <div className={cls.notification__body} aria-expanded={isExpanded}>
              {item}
           </div>
        ))}
     </div>
  );
};
