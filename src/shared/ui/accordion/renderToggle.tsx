import React from 'react';

import { Icon } from 'shared/libs/icons';
import { Typography } from 'shared/ui';
import { ToggleProps } from './types';
import styles from './styles.module.scss';

import { IconWrapper } from '../icon-wrapper';

export const renderToggleDefault: React.FC<ToggleProps> = ({
  isExpanded,
  title,
  toggleHandler,
}) => (
   <button className={styles.accordion__toggle} onClick={toggleHandler} aria-expanded={isExpanded}>
      <Typography variant='body' color={isExpanded ? 'gray-primary' : 'gray-secondary'}>
         {title}
      </Typography>

      <div className={styles.toggleIcon__wrapper}>
         <IconWrapper
           icon={(
              <Icon
                name={isExpanded ? 'minus' : 'plus'}
                color={isExpanded ? 'gray-primary' : 'gray-secondary'}
              />
          )}
           rotate={isExpanded ? 180 : 0}
         />
      </div>
   </button>
);
