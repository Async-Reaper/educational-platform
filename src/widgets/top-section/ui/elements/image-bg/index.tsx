import React from 'react';
import { Image } from 'shared/ui';
import iMac from '../../../img/iMac.png';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.images__bg}>
      <Image src={iMac} name='iMac' />
      <div />
      {/* <div className={cls.image__iMac}>
                    <img src={iMac} alt='iMac' />
                 </div>
                 <div className={cls.image__personalAccount}>
                    <img src={personalAccount} alt='Personal account' />
                 </div>
                 <div className={cls.image__transparentCard}>
                    <img src={transparentCard} alt='Transparent card' />
                 </div>
                 <div className={cls.image__trustCard}>
                    <img src={trustCard} alt='Trust card' />
                 </div> */}
   </div>
);

export const ImageBG = React.memo(Component);
