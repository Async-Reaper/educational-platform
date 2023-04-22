import React from 'react';
import { Button, Typography } from 'shared/ui';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <a href='https://madte.st/EA15a3ZU' target='_blank' className={cls.link} rel='noreferrer'>
      <Button variant='m'>
         <Typography tag='span' variant='h3'>
            Пройти тест
         </Typography>
         <ColoredIcon name='test_checked' width={64} height={44} />
      </Button>
   </a>
);

export const OpenTestBtn = React.memo(Component);
