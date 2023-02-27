import React, { useState } from 'react';

import cls from './styles.module.scss';

import { IAccordionProps } from './types';
import { renderBodyDefault } from './renderBody';
import { renderToggleDefault } from './renderToggle';

const Component: React.FC<IAccordionProps> = ({
  isOpen = false,
  notification,
  isNotification,
  renderToggle = renderToggleDefault,
  renderBody = renderBodyDefault,
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const toggleHandler = () => setIsExpanded((prevState) => !prevState);

  return (
     <div className={cls.notification}>
        {renderToggle({ isExpanded, isNotification, toggleHandler })}
        {renderBody({ isExpanded, notification, toggleHandler })}
     </div>
  );
};

export const Notification = React.memo(Component);
