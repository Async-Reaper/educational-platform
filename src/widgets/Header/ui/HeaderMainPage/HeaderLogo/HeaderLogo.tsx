import React from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import { Typography } from 'shared/ui';
import { useResize } from 'shared/hooks/useResize/useResize';
import cls from './styles.module.scss';

const Component = () => {
  const widthScreen = useResize().width;

  return (
     <div className={cls.header__logo}>
        <ColoredIcon name='logo' size={59} />
        <div className={cls.header__title}>
           <Typography tag='b'>
              {
                   widthScreen > 568
                     ? 'Кузбасский колледж архитектуры, строительства и цифровых технологий'
                     : 'ККАСиЦТ'
               }
           </Typography>
        </div>
     </div>
  );
};

export const HeaderLogo = React.memo(Component);
