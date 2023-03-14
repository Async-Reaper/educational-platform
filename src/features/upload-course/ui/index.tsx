import React, { useState } from 'react';
import {
  Button, DragDrop, Input, Typography,
} from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => {
  const [files, setFiles] = useState();
  const [nameResource, setNameResource] = useState();
  const dataResource = {

  }
  return (
     <div className={cls.upload_course__wrapper}>
        <Input placeholder='Название вашего ресурса' />
        <div className={cls.select__wrapper}>
           <select className={cls.select}>
              <option className={cls.select_option} disabled defaultValue='course' selected>Курс куда вы хотите загрузить ресурс</option>
              <option className={cls.select_option} value='value1'>Программирование</option>
              <option className={cls.select_option} value='value2'>Веб-дизайн</option>
              <option className={cls.select_option} value='value3'>Средства защиты информации</option>
              <option className={cls.select_option} value='value4'>3Д моделирование</option>
           </select>
        </div>
        <DragDrop multiple={false} labelText='Загрузите ресурс' type={['PDF', 'MP4']} />
        <Button variant='xs' background='violet-primary'>
           <Typography variant='h3'>Загрузить ресурс</Typography>
        </Button>
     </div>
  );
};

export const UploadCourse = React.memo(Component);
