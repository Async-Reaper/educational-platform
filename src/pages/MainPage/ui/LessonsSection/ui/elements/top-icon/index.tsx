import React from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.video__lessonsTopIcon}>
      <ColoredIcon name='line' width={64} height={4} />
   </div>
);

export const TopIcon = React.memo(Component);
