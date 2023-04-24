import React, { useState } from 'react';
import { DeleteResource } from 'features';
import DeleteIcon from '@mui/icons-material/Delete';
import cls from '../../../../pages/topic-page/ui/styles.module.scss';
import { API_URL } from '../../../../shared/constants/baseURL';
import { ModalWindow, Typography } from '../../../../shared/ui';
import { ResourceType } from '../../../../entities/topic/model/types';
import { Comments } from '../comments';
import { getCookie } from '../../../../shared/libs/cookie';
import { ColoredIcon } from '../../../../shared/libs/icons';

interface Props {
  presentations: ResourceType[] | undefined
}

const Component: React.FC<Props> = ({ presentations }) => {
  const [isVisibleDeleteResource, setIsVisibleDeleteResource] = useState(false);

  return (
     <div className={cls.resources__list}>
        {presentations?.map((presentation) => (
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
                 <DeleteResource id={presentation.id} setVisible={setIsVisibleDeleteResource} />
              </ModalWindow>
              <div className={cls.resource_text_info__wrapper}>
                 <Typography tag='span' variant='body' color='violet-primary'>
                    {presentation.name}
                 </Typography>
                 <Typography tag='span' variant='body' color='black-bg'>
                    {presentation.description}
                 </Typography>
                 <a
                   className={cls.link}
                   href={`${API_URL}${presentation.file}`}
                   target='_blank'
                   download
                   rel='noreferrer'
                 >
                    Ссылка
                 </a>
              </div>
              <Comments id={presentation.id} />
           </div>
        ))}
     </div>
  );
};

export const PresentationList = React.memo(Component);
