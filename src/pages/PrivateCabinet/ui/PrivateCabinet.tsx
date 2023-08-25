import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getInfoUser, userData } from 'entities/User';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import {
   Avatar, Button, PopupWindow, Typography,
} from 'shared/ui';
// @ts-ignore
import dateFormat from 'dateformat';
import { authData } from 'features/Auth';
import { changeEmailIsSuccess, ChangeEmailModal } from 'features/ChangeEmail';
import { useModal } from 'shared/hooks/useModal/useModal';
import { ChangePasswordModal } from 'features/ChangePassword';
import { AuthFormAsync } from 'features/Auth/ui/AuthForm/AuthForm.async';
import cls from './styles.module.scss';
import ava from '../../../../public/images/mock/ava.png';

const Component = () => {
   const user = useSelector(userData);
   const auth = useSelector(authData);

   const statusChangeEmail = useSelector(changeEmailIsSuccess);

   const { isOpen: isOpenChangeEmail, open: openChangeEmail, close: closeChangeEmail } = useModal();
   const { isOpen: isOpenChangePassword, open: openChangePassword, close: closeChangePassword } = useModal();
   const { close: closeAuth } = useModal();

   const dispatch = useAppDispatch();
   const token: string = localStorage.getItem('token') || '';

   const [isPopupChangeEmail, setIsPopupChangeEmail] = useState(false);

   const dateReg: string = dateFormat(user?.registration_date, 'isoDateTime').replace(/T/, ' ');

   useEffect(() => {
      (auth || user) && dispatch(getInfoUser());

      statusChangeEmail && setIsPopupChangeEmail(true);
   }, [dispatch, token, statusChangeEmail]);

   return (
      <div data-testid='private-cabinet-page'>
         {user || token
            ? (
               <div className={cls.user_info}>
                  <PopupWindow
                     popupText='Смена адреса прошла успешно'
                     isVisible={isPopupChangeEmail}
                     setIsVisible={setIsPopupChangeEmail}
                  />
                  <div className={cls.top_info_part}>
                     <Avatar
                        src={user?.icon
                           ? `${__API__}${user?.icon}`
                           : ava}
                        variant='xl'
                     />
                     <Typography variant='h1' color='violet-primary'>
                        #
                        {user?.id}
                     </Typography>
                  </div>
                  <div className={cls.other__info}>
                     <div className={cls.info_item}>
                        <Typography variant='body' color='black-bg'>ФИО:</Typography>
                        <Typography variant='body' color='violet-primary'>
                           {user?.full_name}
                        </Typography>
                     </div>
                     <div className={cls.info_item}>
                        <Typography variant='body' color='black-bg'>Почта:</Typography>
                        <Typography variant='body' color='violet-primary'>
                           {user?.email}
                        </Typography>
                     </div>
                     <div className={cls.info_item}>
                        <Typography variant='body' color='black-bg'>Дата регистрации:</Typography>
                        <Typography variant='body' color='violet-primary'>
                           {/* eslint-disable-next-line no-unsafe-optional-chaining */}
                           {dateReg.slice(0, dateReg?.length - 8)}
                        </Typography>
                     </div>
                     <div className={cls.info_item}>
                        <Button variant='xs' onClick={openChangeEmail}>
                           <Typography>
                              Сменить почту
                           </Typography>
                        </Button>
                        <Button variant='xs' onClick={openChangePassword}>
                           <Typography>
                              Сменить пароль
                           </Typography>
                        </Button>
                     </div>
                  </div>
                  {
                     isOpenChangeEmail
                      && (
                         <ChangeEmailModal
                            isOpen={isOpenChangeEmail}
                            onClose={closeChangeEmail}
                         />
                      )
                  }
                  {
                     isOpenChangePassword
                      && (
                         <ChangePasswordModal
                            isOpen={isOpenChangePassword}
                            onClose={closeChangePassword}
                         />
                      )
                  }
               </div>
            )
            : (
               <div className={cls.auth__wrapper}>
                  <AuthFormAsync onSuccess={closeAuth} />
               </div>
            )}
      </div>
   );
};

export default Component;
