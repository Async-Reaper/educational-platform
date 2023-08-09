import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from 'shared/ui';
import { ResourceType } from 'entities/Topic';
import { getCookie } from 'shared/libs/cookie';
import { useModal } from 'shared/hooks/useModal/useModal';
import { DeleteResourceModal } from 'features/DeleteResource';
import { Comments } from '../Comments/Comments';
import cls from '../styles.module.scss';

interface Props {
  lectures: ResourceType[] | undefined
}

const Component = ({ lectures }: Props) => {
  const { isOpen, open, close } = useModal();

  return (
     <div className={cls.resources__list}>
        {lectures?.map((lecture) => (
           <>
              {
                   isOpen
                   && (
                   <DeleteResourceModal
                     id={lecture.id}
                     isOpen={isOpen}
                     onClose={close}
                   />
                   )
               }
              <div className={cls.resource__wrapper}>
                 {
                            getCookie('is_teacher') === 'true'
                            && (
                            <div className={cls.delete_topic__btn} onClick={open}>
                               <DeleteIcon />
                               <Typography tag='span' variant='small'>
                                  Удалить
                               </Typography>
                            </div>
                            )
                        }
                 <div className={cls.resource_text_info__wrapper}>
                    <Typography tag='span' variant='h3' color='violet-primary'>
                       {lecture.name}
                    </Typography>
                    <Typography tag='span' variant='body' color='black-bg'>
                       {lecture.description}
                    </Typography>
                    <a
                      className={cls.link}
                      href={`${__API__}${lecture.file}`}
                      target='_blank'
                      download
                      rel='noreferrer'
                    >
                       <Typography tag='span' variant='body' color='black-bg'>
                          Ссылка
                       </Typography>
                    </a>
                 </div>
                 <Comments id={lecture.id} />
              </div>
           </>
        ))}
     </div>
  );
};

export const LectureList = React.memo(Component);
