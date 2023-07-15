import React, { useState } from 'react';
import { DeleteResource } from 'features';
import DeleteIcon from '@mui/icons-material/Delete';
import cls from '../../../../pages/topic-page/ui/styles.module.scss';
import { ModalWindow, Typography } from '../../../../shared/ui';
import { TrainingApparatuses } from '../../../../entities/topic/model/types';
import { Comments } from '../comments';
import { getCookie } from '../../../../shared/libs/cookie';

interface Props {
  trainings: TrainingApparatuses[] | undefined
}

const Component: React.FC<Props> = ({ trainings }) => {
  const [isVisibleDeleteResource, setIsVisibleDeleteResource] = useState(false);

  return (
     <div className={cls.resources__list}>
        {trainings?.map((training) => (
           <div className={cls.resource__wrapper}>
              {
                        getCookie('is_teacher') === 'true'
                        && (
                        <div className={cls.delete_topic__btn} onClick={() => setIsVisibleDeleteResource(true)}>
                           <DeleteIcon />
                           <Typography tag='span' variant='small'>
                              Удалить
                           </Typography>
                        </div>
                        )
                    }
              <ModalWindow isVisible={isVisibleDeleteResource} setIsVisible={setIsVisibleDeleteResource}>
                 <DeleteResource id={training.id} setVisible={setIsVisibleDeleteResource} />
              </ModalWindow>
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
