import React from 'react';
import { Typography } from 'shared/ui';

const Component = () => (
   <>
      <Typography variant='body' color='white-bg'>
         Пользовательское соглашение
      </Typography>
      <Typography variant='body' color='white-bg'>
         Согласие на обработку персональных данных
      </Typography>
   </>
);

export const RightContent = React.memo(Component);
