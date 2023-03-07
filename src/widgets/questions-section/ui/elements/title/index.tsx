import React from 'react';
import {Typography} from 'shared/ui';

const Component = () => (
   <Typography tag='strong' variant='h1' uppercase color='violet-primary'>
      возникли вопросы?
   </Typography>
);

export const Title = React.memo(Component);
