import React, { useEffect, useState } from 'react';
import { Button, Input, Typography } from 'shared/ui';
import cls from './styles.module.scss';
import { auth } from '../api/auth';

interface Props {
  setVisible: (arg: boolean) => void
}

const Component: React.FC<Props> = ({ setVisible }) => {
  const [phone, setPhone] = useState<string>('+7');
  const [error, setError] = useState<boolean>(true);
  const [res, setRes] = useState<any>({});
  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (phone == '+7' || phone.length < 11) {
      setError(true);
    } else {
      setError(false);
    }
  }, [phone]);

  const data = {
    phone,
  };

  const handleAuth = async () => {
    if (!error) {
      const authFunc = await auth(data);
      setRes(authFunc);
    }
    if (res.message !== undefined) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return (
     <div className={cls.auth__wrapper}>
        <Input
          type='tel'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          max={12}
          min={12}
          label='Ваш номер телефона'
        />
        <Button disabled={error} variant='xs' background='violet-primary' onClick={handleAuth}>
           <Typography variant='h3'>Вход</Typography>
        </Button>
        {
             res.message !== undefined
                 && (
                 <div className={cls.auth__error}>
                    <Typography>
                       {res.message}
                    </Typography>
                 </div>
                 )
         }
     </div>
  );
};

export const AuthPhone = React.memo(Component);
