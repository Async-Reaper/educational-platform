import React, { useState } from 'react';
import {
  Button, DragDrop, Input, Typography,
} from 'shared/ui';
import cls from './styles.module.scss';

interface Props {
  setIsVisible?: (arg: boolean) => void
}

const Component: React.FC<Props> = ({ setIsVisible }) => {
  const [filesCourse, setFilesCourse] = useState<any>([]);
  const [error, setError] = useState<boolean>();
  const [titleResource, setTitleResource] = useState<string>('');
  const [nameResource, setNameResource] = useState<string>('');
  const [typeResource, setTypeResource] = useState<string>('');

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const uploadResource = (evt: any) => {
    const { files } = evt.target;
    const data: any[] = [];
    // eslint-disable-next-line no-cond-assign
    for (let i = 0, f:any; (f = files[i]); i++) {
      const reader = new FileReader();

      reader.onload = function () {
        data.push(f);
        setFilesCourse([...filesCourse, ...data]);
      };
      reader.readAsText(f);
    }
  };

  const dataResource = {
    titleResource,
    nameResource,
    typeResource,
    filesCourse: '',
  };

  const handleUpload = () => {
    // await uploadFiles(nameResource, typeResource, filesCourse[0]);
    // if (!error) {
    //   uploadResource(dataResource);
    //   if (setIsVisible) {
    //     setIsVisible(false);
    //   }
    // }
  };

  return (
     <div className={cls.upload_course__wrapper}>
        <Input
          value={titleResource}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitleResource(e.target.value)}
          placeholder='Название вашего ресурса'
        />
        <div className={cls.select__wrapper}>
           <select
             className={cls.select}
             onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setNameResource(e.target.value)}
           >
              <option className={cls.select_option} disabled defaultValue='course' selected>
                 Курс куда вы хотите загрузить ресурс
              </option>
              <option className={cls.select_option} value='programming'>
                 Программирование
              </option>
              <option className={cls.select_option} value='web-design'>
                 Веб-дизайн
              </option>
              <option className={cls.select_option} value='secure-information'>
                 Средства защиты информации
              </option>
              <option className={cls.select_option} value='3d-modeling'>
                 3Д моделирование
              </option>
           </select>
        </div>
        <div className={cls.select__wrapper}>
           <select
             className={cls.select}
             onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTypeResource(e.target.value)}
           >
              <option className={cls.select_option} disabled defaultValue='course' selected>
                 Вид вашего ресурса
              </option>
              <option className={cls.select_option} value='presentation'>
                 Презентация
              </option>
              <option className={cls.select_option} value='lecture'>
                 Лекция
              </option>
              <option className={cls.select_option} value='video'>
                 Видео
              </option>
           </select>
        </div>
        <DragDrop
          onChange={uploadResource}
          filesInfo={filesCourse}
          multiple={false}
          labelText='Загрузите ресурс'
          acceptType='.pdf, .mp4'
        />
        <Button onClick={handleUpload} disabled={error} variant='xs' background='violet-primary'>
           <Typography variant='h3'>Загрузить ресурс</Typography>
        </Button>
     </div>
  );
};

export const UploadResource = React.memo(Component);