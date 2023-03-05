import React from 'react';
import { Typography } from 'shared/ui';

const Component = () => (
   <Typography tag='h1' variant='h1'>
      Как воспользоваться платформой
   </Typography>
);

export const Title = React.memo(Component);
