import React from 'react';
import { Icon } from 'shared/libs/icons';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.lesson__additional}>
      <Icon name='megaphone' width={48} height={55} />
      <Typography tag='h3' variant='h3' color='gray-primary'>
         Этому и не только вы
          <span className={cls.color__part}> научитесь на нашей платформе.</span>
      </Typography>
   </div>
);

export const LessonsAdditional = React.memo(Component);
