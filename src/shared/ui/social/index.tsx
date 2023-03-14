import React from 'react';
import { Icon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.social}>
      <a href='https://vk.com/kkasict' target='_blank' rel='noreferrer'>
         <Icon name='wk' size={30} />
      </a>
      <a href='https://www.youtube.com/@newnst' target='_blank' rel='noreferrer'>
         <Icon name='youtube' size={30} />
      </a>
      <a href='https://t.me/gapoukkasict' target='_blank' rel='noreferrer'>
         <Icon name='tg' size={30} />
      </a>
   </div>
);

export const Social = React.memo(Component);
