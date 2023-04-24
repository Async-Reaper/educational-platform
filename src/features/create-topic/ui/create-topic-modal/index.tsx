import React, { useCallback, useState } from 'react';
import { ModalWindow, Typography } from 'shared/ui';
import { getCourseSelector } from 'entities/course';
import { CreateTopicForm } from 'features/create-topic/ui/create-topic-form';
import cls from './styles.module.scss';

const Component = () => {
  const [isVisibleCreateTopic, setIsVisibleCreateTopic] = useState(false);
  const dataCourse = getCourseSelector();

  const onShowCreateTopicModal = useCallback(() => {
    setIsVisibleCreateTopic(true);
  }, []);

  return (
     <>
        <div
          className={cls.add_topic__wrapper}
          onClick={onShowCreateTopicModal}
        >
           <div className={cls.add_topic__btn}>
              <Typography variant='small' uppercase tag='strong'>
                 Добавить новую тему
              </Typography>
           </div>
        </div>
        <ModalWindow
          isVisible={isVisibleCreateTopic}
          setIsVisible={setIsVisibleCreateTopic}
        >
           <CreateTopicForm id={dataCourse?.data?.id} setVisible={setIsVisibleCreateTopic} />
        </ModalWindow>
     </>
  );
};

export const CreateTopicModal = React.memo(Component);
