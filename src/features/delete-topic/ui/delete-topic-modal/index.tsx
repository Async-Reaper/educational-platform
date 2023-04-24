import React, { type FC, useCallback, useState } from 'react';
import { ModalWindow, Typography } from 'shared/ui';
import { DeleteTopicForm } from 'features/delete-topic/ui/delete-topic-form';
import cls from './styles.module.scss';

interface Props {
  topicId: number;
  courseId: number | undefined;
}

const Component: FC<Props> = ({ topicId, courseId }) => {
  const [idTopic, setIdTopic] = useState<number>(1);
  const [isVisibleDeleteTopic, setIsVisibleDeleteTopic] = useState(false);

  const showDeleteTopic = useCallback((idTopicWindow: number) => {
    setIsVisibleDeleteTopic(true);
    setIdTopic(idTopicWindow);
  }, []);

  return (
     <>
        <div
          className={cls.delete_topic__btn}
          onClick={() => showDeleteTopic(topicId)}
        >
           <Typography tag='span' variant='small'>
              Удалить
           </Typography>
        </div>
        <ModalWindow
          isVisible={isVisibleDeleteTopic}
          setIsVisible={setIsVisibleDeleteTopic}
        >
           <DeleteTopicForm
             idTopic={idTopic}
             idCourse={courseId}
             setVisible={setIsVisibleDeleteTopic}
           />
        </ModalWindow>
     </>
  );
};

export const DeleteTopicModal = React.memo(Component);
