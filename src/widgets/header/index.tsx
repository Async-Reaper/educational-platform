import React, { type FC } from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import { Button } from 'shared/ui';
import cls from './styles.module.scss';

interface Props {

}

const Component: FC<Props> = () => {
  const path = '/';
  return (
     <div className={cls.header}>
        <div className={cls.header__inner}>
           <div className={cls.header__logo}>
              <ColoredIcon name='logo' />
           </div>
           <div className={cls.button__group}>
              <Button variant='xs' border>Зарегистрироваться</Button>
              <Button variant='xs'>Вход</Button>
           </div>
        </div>
     </div>
  );
};

export const Header = React.memo(Component);
