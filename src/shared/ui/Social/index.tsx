import React from 'react';
import { Icon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.social}>
      <a href='https://vk.com/kkasict' className={cls.social__link} target='_blank' rel='noreferrer'>
         <Icon name='wk' color='gray-secondary' size={40} />
      </a>
      <a href='https://www.youtube.com/@newnst' className={cls.social__link} target='_blank' rel='noreferrer'>
         <Icon name='youtube' color='gray-secondary' size={40} />
      </a>
      <a href='https://t.me/gapoukkasict' className={cls.social__link} target='_blank' rel='noreferrer'>
         <Icon name='tg' color='gray-secondary' size={40} />
      </a>
   </div>
);

export const Social = React.memo(Component);
