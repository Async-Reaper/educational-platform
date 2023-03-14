import React, { useState } from 'react';
import cls from './styles.module.scss';

const Component = () => {
  const [drag, setDrag] = useState(false);

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    //  const files = [...e.dataTransfer.files];
    //  console.log(files);
  }

  return (
     <div>
        {drag
          ? (
             <div
               className={cls.drop_area}
               onDragStart={(e) => dragStartHandler(e)}
               onDragLeave={(e) => dragLeaveHandler(e)}
               onDragOver={(e) => dragStartHandler(e)}
               onDrop={(e) => onDropHandler(e)}
             >
                Отпустите файлы, чтобы загрузить их
             </div>
          )
          : (
             <div
               className={cls.drop_area}
               onDragStart={(e) => dragStartHandler(e)}
               onDragLeave={(e) => dragLeaveHandler(e)}
               onDragOver={(e) => dragStartHandler(e)}
             >
                Перетащите файлы, чтобы загрузить их
             </div>
          )}
     </div>
  );
};

export const DragDrop = React.memo(Component);
