import React, { useState } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';
import pdfIcon from './img/pdf.png';
import imgIcon from './img/image.png';
import videoIcon from './img/video.png';

const fileTypes: string = 'image/png, image/jpeg, image/jpg';

interface Props {
  multiple?: boolean;
  labelText?: string;
  acceptType?: any;
  onChange: any
  filesInfo: any[];
}

const Component = (props: Props) => {
  const {
    multiple = false,
    labelText,
    acceptType = fileTypes,
    onChange,
    filesInfo,
  } = props;

  const [drop, setDrop] = useState(false);

  const selectFileImage = (typeFile: string) => {
    if (typeFile.match('image.*')) {
      return imgIcon;
    }
    if (typeFile === 'application/pdf') {
      return pdfIcon;
    }
    if (typeFile === 'video/mp4') {
      return videoIcon;
    }
  };

  return (
     <div className={cls.drop__wrapper}>
        {labelText
          ? <label htmlFor={labelText}>{labelText}</label>
          : null}

        <div className={cls.wrapper}>
           {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
           <div
             className={classNames(cls.drop, [], { [cls.active]: drop })}
             onDragEnter={() => setDrop(true)}
             onDragLeave={() => setDrop(false)}
             // onDragEnd={() => setDrop(false)}
             onMouseOut={() => setDrop(false)}
             onDrop={() => setDrop(false)}
           >
              <div className={cls.cont}>
                 <div>
                    <div className={cls.tit}>Перенесите сюда</div>
                    <div className={cls.desc}>ваши файлы, или</div>
                    <div className={cls.browse}> Кликните здесь</div>
                 </div>
              </div>
              <output id='#list' className={cls.list} />
              <input
                type='file'
                multiple={multiple}
                onChange={onChange}
                accept={acceptType}
              />
           </div>
        </div>
        <div className={cls.files__list__wrapper}>
           {filesInfo.map((file, index) => (
              <div key={index} className={cls.file__name__wrapper}>
                 <div className={cls.file__img__wrapper}>
                    <img src={selectFileImage(file.type)} alt='' />
                 </div>
                 {file.name}
              </div>
           ))}
        </div>
     </div>
  );
};

export const DragDrop = React.memo(Component);
