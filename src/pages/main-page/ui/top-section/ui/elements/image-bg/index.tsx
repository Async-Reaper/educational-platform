import React from 'react';
import { Image } from 'shared/ui';
import iMacWebp from '../../../../../../../../public/images/common/iMac.webp';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.images__bg}>
      <Image src={iMacWebp} name='iMac' />
   </div>
);

export const ImageBG = React.memo(Component);
