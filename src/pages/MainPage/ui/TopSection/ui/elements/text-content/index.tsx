import React from 'react';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.content__text}>
      <Typography variant='h2' color='white-bg'>
         Интеллектуальная платформа
         <span> для обмена педагогическим опытом</span>
      </Typography>
   </div>
);

export const TextContent = React.memo(Component);
