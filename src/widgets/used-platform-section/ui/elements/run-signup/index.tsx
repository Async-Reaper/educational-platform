import React, { useState } from 'react';
import { Button, ModalWindow, Typography } from 'shared/ui';
import { Icon } from 'shared/libs/icons';
import { Signup } from 'features/signup';
import cls from './styles.module.scss';

const Component = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
     <>
        <Button variant='m' border onClick={() => setIsVisible(!isVisible)}>
           <Typography tag='span' variant='h3'>
              Поехали
           </Typography>
           <Icon className={cls.btn_icon} name='arrow_rounded' color='violet-primary' size={48} />
        </Button>
        <ModalWindow isVisible={isVisible} setIsVisible={() => setIsVisible(!isVisible)}>
           <Signup />
        </ModalWindow>
     </>
  );
};

export const RunSignup = React.memo(Component);
