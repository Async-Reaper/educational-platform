import React from 'react';
import { Typography } from 'shared/ui';

const Component = () => (
   <Typography tag='h2' variant='h2'>
      Получите нужный курс за минуту.
   </Typography>
);

export const Subtitle = React.memo(Component);
