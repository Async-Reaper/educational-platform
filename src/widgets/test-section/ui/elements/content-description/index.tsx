import React from 'react';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.content__description}>
      <Typography tag='span' variant='h3' color='gray-primary'>
         Наши и реальные тесты идентичны по сложности, тематике и формату вопросов.
      </Typography>
   </div>
);

export const ContentDescription = React.memo(Component);
