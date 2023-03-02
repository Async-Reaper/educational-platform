import React from 'react';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.upload__description}>
      <Typography tag='strong' variant='h3'>
         Загрузка курса
      </Typography>
      <Typography tag='h1' variant='h3'>
         У нас есть план эвакуации из любой проблемной ситуации.
      </Typography>
   </div>
);

export const UploadDescription = React.memo(Component);
