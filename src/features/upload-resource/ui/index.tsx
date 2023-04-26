import React, { useEffect, useState } from 'react';
import {
  Button, DragDrop, ErrorText, Input, Typography,
} from 'shared/ui';
import { fetchUploadResource } from 'features/upload-resource/model/api/uploadResource';
import { getStatusRequest } from 'shared/libs/selectors';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { UploadResourceType } from 'features/upload-resource/model/types';
import { getStatusUploadResourceSelector } from 'features/upload-resource';
import cls from './styles.module.scss';

interface Props {
  id: number | undefined;
  setIsVisible?: (arg: boolean) => void
  transTypeResource?: 'presentation ' | 'video' | 'lecture'
}

const Component: React.FC<Props> = ({ setIsVisible, id, transTypeResource }) => {
  const statusUploadResource = getStatusUploadResourceSelector();
  const dispatch = useAppDispatch();
  const nameResource = useInput('', { isEmpty: true });
  const descriptionResource = useInput('', { isEmpty: true });
  const [filesCourse, setFilesCourse] = useState<any>([]);
  const [typeResource, setTypeResource] = useState<'presentation ' | 'video' | 'lecture' | any>('video');

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const uploadResource = (evt: any) => {
    const { files } = evt.target;
    const data: any[] = [];
    // eslint-disable-next-line no-cond-assign
    for (let i = 0, f: any; (f = files[i]); i++) {
      const reader = new FileReader();

      reader.onload = function () {
        data.push(f);
        setFilesCourse([...filesCourse, ...data]);
      };
      reader.readAsText(f);
    }
  };

  useEffect(() => {
    if (setIsVisible) {
      statusUploadResource.isSuccess && setIsVisible(false);
    }
  }, [setIsVisible, statusUploadResource.isSuccess]);

  const dataResource = new FormData();

  const handleUpload = () => {
    nameResource.onBlur();
    dataResource.append('name', nameResource.value);
    dataResource.append('description', nameResource.value);
    dataResource.append('resource_type', transTypeResource || typeResource);
    dataResource.append('resource_file', filesCourse[0]);

    const dataUpload: UploadResourceType = {
      id,
      dataUpload: dataResource,
    };

    if (filesCourse.length !== 0 && nameResource.value !== '') {
      dispatch(fetchUploadResource(dataUpload));
    }
  };

  return (
     <div className={cls.upload_course__wrapper}>
        <Input
          type='text'
          value={nameResource.value}
          onChange={nameResource.onChange}
          label='Название ресурса'
        />
        {(nameResource.isEmpty && nameResource.isDirty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
        <Input
          type='text'
          value={descriptionResource.value}
          onChange={descriptionResource.onChange}
          label='Краткое описание'
        />
        {(descriptionResource.isEmpty && descriptionResource.isDirty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
        <div className={cls.select__wrapper}>
           {
                    !transTypeResource
                    && (
                    <select
                      name='resource_type'
                      className={cls.select}
                      defaultValue='video'
                      value={typeResource}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTypeResource(e.target.value)}
                    >
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
                    )
                }
        </div>
        <DragDrop
          name='resource_file'
          onChange={uploadResource}
          filesInfo={filesCourse}
          multiple={false}
          labelText='Загрузите ресурс'
          acceptType={
                    transTypeResource
                      ? transTypeResource === 'video'
                        ? '.mp4'
                        : '.pdf'
                      : typeResource === 'video'
                        ? '.mp4'
                        : '.pdf'
                }
        />
        {(filesCourse.length === 0) && <ErrorText>Поле не должно быть пустым</ErrorText>}
        <Button onClick={handleUpload} variant='xs' background='violet-primary'>
           <Typography variant='body'>Загрузить ресурс</Typography>
        </Button>
        {
            statusUploadResource.error
                && (
                <ErrorText>Произошла ошибка, повторите попытку позже</ErrorText>
                )
            }
     </div>
  );
};

export const UploadResource = React.memo(Component);
