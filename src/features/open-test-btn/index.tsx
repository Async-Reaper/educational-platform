import React from 'react';
import { Button, Typography } from 'shared/ui';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <Button variant='m'>
      <a href='/' target='_blank' className={cls.link}>
         <Typography tag='span' variant='h3'>
            Пройти тест
         </Typography>
         <ColoredIcon name='test_checked' width={64} height={44} />
      </a>
   </Button>
);

export const OpenTestBtn = React.memo(Component);
