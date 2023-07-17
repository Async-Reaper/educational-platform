import React, { useCallback, useState } from 'react';
import {
  Button, DragDrop, ErrorText, Input, Typography,
} from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModelLoader';
import { UploadResourceType } from '../../model/types';
import { uploadResource } from '../../model/api/uploadResource';
import { uploadResourceError } from '../../model/selectors';
import { uploadResourceReducer } from '../../model/slice/uploadResourceSlice';
import cls from './styles.module.scss';

interface Props {
  id: number | undefined;
  transTypeResource?: 'presentation ' | 'video' | 'lecture'
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  uploadResourceForm: uploadResourceReducer,
};

const UploadResource = ({ id, transTypeResource, onSuccess }: Props) => {
  const error = useSelector(uploadResourceError);

  const dispatch = useAppDispatch();
  const nameResource = useInput('', { isEmpty: true });
  const descriptionResource = useInput('', { isEmpty: true });
  const [filesCourse, setFilesCourse] = useState<any>([]);
  const [typeResource, setTypeResource] = useState<'presentation ' | 'video' | 'lecture' | any>('video');

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleDragDrop = (evt: any) => {
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

  const dataResource = new FormData();

  const acceptType = useCallback(() => {
    if (transTypeResource) {
      transTypeResource === 'video'
        ? '.mp4'
        : '.pdf';
    } else {
      typeResource === 'video'
        ? '.mp4'
        : '.pdf';
    }
  }, [transTypeResource, typeResource]);

  const handleUploadResource = useCallback(async () => {
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
      const response = await dispatch(uploadResource(dataUpload));

      if (response.meta.requestStatus === 'fulfilled') {
        onSuccess();
      }
    }
  }, [dataResource, dispatch, onSuccess]);

  return (
     <DynamicModuleLoader
       reducers={initialReducers}
       removeAfterUnmount
     >
        <div className={cls.wrapper}>
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
             onChange={handleDragDrop}
             filesInfo={filesCourse}
             multiple={false}
             labelText='Загрузите ресурс'
             acceptType={acceptType}
           />
           {(filesCourse.length === 0) && <ErrorText>Поле не должно быть пустым</ErrorText>}
           <Button onClick={handleUploadResource} variant='xs' background='violet-primary'>
              <Typography variant='body'>Загрузить ресурс</Typography>
           </Button>
           {
             error
             && (
             <ErrorText>Произошла ошибка, повторите попытку позже</ErrorText>
             )
         }
        </div>
     </DynamicModuleLoader>
  );
};

export default UploadResource;
