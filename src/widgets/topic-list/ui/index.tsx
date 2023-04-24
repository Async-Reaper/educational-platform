import React, { type FC } from 'react';
import { Typography } from 'shared/ui';
import { getCourseSelector } from 'entities/course';
import { getCookie } from 'shared/libs/cookie';
import { CreateTopicModal, DeleteTopicModal } from 'features';
import { LinkButton } from 'widgets/topic-list/ui/link-button';
import cls from './styles.module.scss';

interface Props {
  idCourse: string | undefined;
}

const Component: FC<Props> = ({ idCourse }) => {
  const dataCourse = getCourseSelector();

  return (
     <div className={cls.topics__list}>
        {
             getCookie('is_teacher') === 'true'
             && <CreateTopicModal />
         }
        {
            dataCourse?.data?.topics.map((topic) => (
               <div className={cls.topic__wrapper}>
                  <div>
                     <Typography variant='body' color='black-bg'>{topic.name}</Typography>
                  </div>
                  <div className={cls.topic__buttons}>
                     <LinkButton courseId={idCourse} topicId={topic.id} />
                     {
                          getCookie('is_teacher') === 'true'
                          && <DeleteTopicModal topicId={topic.id} courseId={dataCourse.data?.id} />
                      }
                  </div>
               </div>
            ))
        }
     </div>
  );
};

export const TopicList = React.memo(Component);
