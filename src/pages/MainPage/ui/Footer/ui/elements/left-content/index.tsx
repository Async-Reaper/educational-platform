import React from 'react';
import { AppLink, Typography } from 'shared/ui';

const Component = () => (
   <>
      <AppLink to='/platform'>
         <Typography variant='body' color='white-bg'>
            Ссылка на сайт
         </Typography>
      </AppLink>
      <Typography variant='body' color='white-bg'>
         s.kuranova@kasict.ru
      </Typography>
   </>
);

export const LeftContent = React.memo(Component);
