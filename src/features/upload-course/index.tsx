import React from 'react';
import { Button, Typography } from 'shared/ui';
import { Icon } from 'shared/libs/icons';

const Component = () => (
   <Button variant='m' background='white-bg'>
      <Typography tag='strong' variant='h3'>Загрузить курс</Typography>
      <Icon name='lightness' size={36} />
   </Button>
);

export const UploadCourse = React.memo(Component);
