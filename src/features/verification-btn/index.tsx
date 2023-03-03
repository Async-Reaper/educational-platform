import React from 'react';
import { Button, Typography } from 'shared/ui';
import { Icon } from 'shared/libs/icons';

const Component = () => (
   <div>
      <Button variant='m'>
         <Typography tag='strong' variant='h3'>
            Пройти верификацию
         </Typography>
         <Icon name='verification' size={49} />
      </Button>
   </div>
);

export const VerificationBtn = React.memo(Component);
