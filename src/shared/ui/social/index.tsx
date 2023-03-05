import React from 'react';
import { Icon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.social}>
      <Icon name='wk' size={30} />
      <Icon name='youtube' size={30} />
      <Icon name='tg' size={30} />
   </div>
);

export const Social = React.memo(Component);
