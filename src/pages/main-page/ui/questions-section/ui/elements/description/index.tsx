import React from 'react';
import { Typography } from 'shared/ui';

const Component = () => (
   <Typography>
      В данном разделе можно задать вопрос нашим экспертам.
   </Typography>
);

export const Description = React.memo(Component);
