import React, { useState } from 'react';
import { Button, Typography } from 'shared/ui';
import { Icon } from 'shared/libs/icons';
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
     </>
  );
};

export const RunSignup = React.memo(Component);
