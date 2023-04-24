import React, { useState } from 'react';
import { DeleteResource } from 'features';
import DeleteIcon from '@mui/icons-material/Delete';
import cls from '../../../../pages/topic-page/ui/styles.module.scss';
import { API_URL } from '../../../../shared/constants/baseURL';
import { ModalWindow, Typography } from '../../../../shared/ui';
import { AddComment } from '../../../../features/add-comment/ui';
import { CommentsList } from '../../../comments-list';
import { ResourceType } from '../../../../entities/topic/model/types';
import { Comments } from '../comments';
import { getCookie } from '../../../../shared/libs/cookie';

interface Props {
  videos: ResourceType[] | undefined
}

const Component: React.FC<Props> = ({ videos }) => {
  const [isVisibleDeleteResource, setIsVisibleDeleteResource] = useState(false);

  return (
     <div className={cls.resources__list}>
        {videos?.map((video) => (
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
                 <DeleteResource id={video.id} setVisible={setIsVisibleDeleteResource} />
              </ModalWindow>
              <div className={cls.video__lessons}>
                 <div className={cls.resource_text_info__wrapper}>
                    <Typography tag='span' variant='body' color='violet-primary'>{video.name}</Typography>
                    <Typography tag='span' variant='body' color='black-bg'>{video.description}</Typography>
                 </div>
                 <video
                   src={`${API_URL}${video.file}`}
                   controls
                 >
                    <source src={`${API_URL}${video.file}`} />
                 </video>
                 <Comments id={video.id} />
              </div>
           </div>
        ))}
     </div>
  );
};

export const VideoList = React.memo(Component);
