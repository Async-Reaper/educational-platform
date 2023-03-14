import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const fileTypes = ['JPG', 'PNG', 'GIF'];

interface Props {
  multiple?: boolean;
  labelText?: string;
  type?: string[]
}

const Component:React.FC<Props> = (props) => {
  const {
    multiple = false,
    labelText,
    type = fileTypes,
  } = props;

  const [file, setFile] = useState(null);
  const handleChange = (files: any) => {
    setFile(files);
  };
  return (
     <div className={cls.drop__wrapper}>
        {labelText
          ? (
             <label htmlFor={labelText}>
                {labelText}
             </label>
          )
          : null}
        <FileUploader
          id={labelText}
          multiple={multiple}
          handleChange={handleChange}
          name='file'
          types={type}
        >
           <div className={cls.drop__area}>
              <Typography variant='body'>
                 Перетащите сюда файл или нажмите
              </Typography>
           </div>
        </FileUploader>
     </div>
  );
};

export const DragDrop = React.memo(Component);
