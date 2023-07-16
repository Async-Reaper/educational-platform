import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from 'shared/ui';
import { TrainingApparatuses } from 'entities/Topic';
import { getCookie } from 'shared/libs/cookie';
import { DeleteResourceModal } from 'features/DeleteResource';
import { useModal } from 'shared/hooks/useModal/useModal';
import { Comments } from '../Comments/Comments';
import cls from '../styles.module.scss';

interface Props {
  trainings: TrainingApparatuses[] | undefined
}

const Component = ({ trainings }: Props) => {
  const { isOpen, open, close } = useModal();

  return (
     <div className={cls.resources__list}>
        {trainings?.map((training) => (
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
              {
                   isOpen
                   && (
                   <DeleteResourceModal
                     id={training.id}
                     isOpen={isOpen}
                     onClose={close}
                   />
                   )
               }
              <div className={cls.resource_text_info__wrapper}>
                 <Typography tag='span' variant='body' color='black-bg'>
                    {training.description}
                 </Typography>
                 <a
                   className={cls.link}
                   href={training.link}
                   target='_blank'
                   download
                   rel='noreferrer'
                 >
                    Ссылка
                 </a>
              </div>
              <Comments id={training.id} />
           </div>
        ))}
     </div>
  );
};

export const TrainingsList = React.memo(Component);
