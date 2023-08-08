import React from 'react';
import { AppLink, Button, Typography } from 'shared/ui';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <AppLink to='/test' target='_blank' className={cls.link} rel='noreferrer'>
      <Button variant='m'>
         <Typography tag='span' variant='h3'>
            Пройти тест
         </Typography>
         <ColoredIcon name='test_checked' width={64} height={44} />
      </Button>
   </AppLink>
);

export const OpenTestBtn = React.memo(Component);
