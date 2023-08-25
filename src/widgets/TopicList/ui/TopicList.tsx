import React, { type FC } from 'react';
import { Typography } from 'shared/ui';
import { courseData } from 'entities/Course';
import { getCookie } from 'shared/libs/cookie';
import { CreateTopicModal } from 'features/CreateTopic';
import { useModal } from 'shared/hooks/useModal/useModal';
import { DeleteTopicModal } from 'features/DeleteTopic';
import { useSelector } from 'react-redux';
import { LinkButton } from './LinkButton/LinkButton';
import cls from './styles.module.scss';

interface Props {
   idCourse: number | undefined;
}

const Component: FC<Props> = ({ idCourse }) => {
   const dataCourse = useSelector(courseData);
   const { isOpen: isOpenCreateTopic, open: openCreateTopic, close: closeCreateTopic } = useModal();
   const { isOpen: isOpenDeleteTopic, open: openDeleteTopic, close: closeDeleteTopic } = useModal();

   return (
      <div className={cls.topics__list}>
         {
            getCookie('is_teacher') === 'true'
             && (
                <div
                   className={cls.add_topic__wrapper}
                   onClick={openCreateTopic}
                >
                   <div className={cls.add_topic__btn}>
                      <Typography variant='small' uppercase tag='strong'>
                         Добавить новую тему
                      </Typography>
                   </div>
                </div>
             )
         }
         {
            dataCourse?.topics.map((topic) => (
               <div key={topic.id} className={cls.topic__wrapper}>
                  <div>
                     <Typography variant='body' color='black-bg'>{topic.name}</Typography>
                  </div>
                  <div className={cls.topic__buttons}>
                     <LinkButton courseId={idCourse} topicId={topic.id} />
                     {
                        getCookie('is_teacher') === 'true'
                          && (
                             <div
                                className={cls.delete_topic__btn}
                                onClick={openDeleteTopic}
                             >
                                <Typography tag='span' variant='small'>
                                   Удалить
                                </Typography>
                             </div>
                          )
                     }
                     {
                        isOpenDeleteTopic
                        && (
                           <DeleteTopicModal
                              topicId={topic.id}
                              isOpen={isOpenDeleteTopic}
                              onClose={closeDeleteTopic}
                           />
                        )
                     }
                  </div>
               </div>
            ))
         }

         {
            isOpenCreateTopic
           && (
              <CreateTopicModal
                 id={idCourse}
                 isOpen={isOpenCreateTopic}
                 onClose={closeCreateTopic}
              />
           )
         }
      </div>
   );
};

export const TopicList = React.memo(Component);
