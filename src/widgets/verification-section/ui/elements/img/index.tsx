import React from 'react';
import cls from './styles.module.scss';
import mac from '../../../img/mac.png';

const Component = () => (
   <div className={cls.img}>
      <img src={mac} alt='' />
   </div>
);

export const Img = React.memo(Component);
