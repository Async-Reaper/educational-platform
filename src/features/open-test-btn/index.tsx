import React from 'react';
import { Button, Typography } from 'shared/ui';
import { ColoredIcon } from 'shared/libs/icons';

const Component = () => (
   <Button variant='m'>
      <Typography tag='span' variant='h3'>
         Пройти тест
      </Typography>
      <ColoredIcon name='test_checked' width={64} height={44} />
   </Button>
);

export const OpenTestBtn = React.memo(Component);
