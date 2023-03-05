import React, { type FC, ReactNode } from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode;
}
const Component: FC<Props> = ({ children }) => (
   <div className={cls.black__gradient}>
      <div className={cls.wave__section}>
         <ColoredIcon
           className={cls.section__wave}
           name='section_wave'
           width={window.innerWidth}
           height={100}
         />
      </div>
      {children}
   </div>
);

export const BlackGradient = React.memo(Component);
