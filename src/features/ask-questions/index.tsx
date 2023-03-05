import React from 'react';
import { Button, Typography } from 'shared/ui';

const Component = () => (
   <Button variant='m'>
      <Typography tag='span' variant='h3'>
          Задать вопрос
      </Typography>
   </Button>
);

export const AskQuestions = React.memo(Component);
