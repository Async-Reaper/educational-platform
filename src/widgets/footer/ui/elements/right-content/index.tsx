import React from 'react';
import { Typography } from 'shared/ui';

const Component = () => (
   <>
      <Typography variant='body' color='white-bg'>
         Пользовательское соглашение
      </Typography>
      <Typography variant='body' color='white-bg'>
         Игорь Попцов | +7 (999) 999 99 99
      </Typography>
   </>
);

export const RightContent = React.memo(Component);
