import React from 'react';
import { Button, Typography } from 'shared/ui';
import { Icon } from 'shared/libs/icons';

const Component = () => (
   <Button variant='m'>
      <Typography tag='span' variant='h3'>
         Задать вопрос
      </Typography>
      <Icon name='questions' color='white-bg' size={47} />
   </Button>
);

export const AskQuestions = React.memo(Component);
