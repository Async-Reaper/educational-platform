import React, { useState } from 'react';
import { AppLink, Button, Typography } from 'shared/ui';
import { LogoutModal } from 'features/Logout';
import { useModal } from 'shared/hooks/useModal/useModal';
import { HeaderUsername } from './HeaderUsername/HeaderUsername';
import cls from './styles.module.scss';

interface ILinks {
   id: number;
   text: string;
   path: any;
}

const Component = () => {
   const { isOpen, open, close } = useModal();

   const [links] = useState<ILinks[]>([
      {
         id: 1,
         text: 'Главная',
         path: '/platform',

      },
      {
         id: 2,
         text: 'Назад',
         path: -1,
      },
   ]);
   return (
      <div className={cls.header__inner}>
         <div className={cls.header__links}>
            {
               links.map((link) => (
                  <AppLink key={link.id} variant='secondary' to={link.path}>
                     <Typography>{link.text}</Typography>
                  </AppLink>
               ))
            }
         </div>
         <div className={cls.header__private}>
            <HeaderUsername />
            <Button variant='xs' border onClick={open}>
               <Typography>
                  Выйти
               </Typography>
            </Button>
         </div>
         <LogoutModal isOpen={isOpen} onClose={close} />
      </div>
   );
};

export const HeaderPlatformPage = React.memo(Component);
