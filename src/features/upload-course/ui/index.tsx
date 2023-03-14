import React, { useState } from 'react';
import { Button, DragDrop, Input, Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => {
  const [files, setFiles] = useState();
  return (
     <div className={cls.upload_course__wrapper}>
        <Input placeholder='Название вашего курса' />
        <Input label='Файлы с презентациями' type='file' accept='.pptx' />
        <Input label='Файлы с лекциями' type='file' accept='.pdf' />
        <Input label='Видео файлы' type='file' accept='.mp4' />
        <DragDrop />
        <Button variant='xs' background='violet-primary'>
           <Typography variant='h3'>Загрузить курс</Typography>
        </Button>
     </div>
  );
};

export const UploadCourse = React.memo(Component);
