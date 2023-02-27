import React from 'react';

import { Icon } from 'shared/libs/icons';
import { ToggleProps } from './types';
import cls from './styles.module.scss';

export const renderToggleDefault: React.FC<ToggleProps> = ({
  isExpanded,
  isNotification,
  toggleHandler,
}) => (
   <button className={cls.notification__toggle} onClick={toggleHandler} aria-expanded={isExpanded}>
      <Icon
        name='plus'
        color='white-bg'
      />
   </button>
);
