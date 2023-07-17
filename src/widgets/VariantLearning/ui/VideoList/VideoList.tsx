import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useModal } from 'shared/hooks/useModal/useModal';
import { DeleteResourceModal } from 'features/DeleteResource';
import { Typography } from 'shared/ui';
import { ResourceType } from 'entities/Topic/model/types';
import { getCookie } from 'shared/libs/cookie';
import { Comments } from '../Comments/Comments';
import cls from '../styles.module.scss';

interface Props {
  videos: ResourceType[] | undefined
}

const Component: React.FC<Props> = ({ videos }) => {
  const { isOpen, open, close } = useModal();

  return (
     <div className={cls.resources__list}>
        {videos?.map((video) => (
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
                     id={video.id}
                     isOpen={isOpen}
                     onClose={close}
                   />
                   )
               }
              <div className={cls.video__lessons}>
                 <div className={cls.resource_text_info__wrapper}>
                    <Typography tag='span' variant='body' color='violet-primary'>{video.name}</Typography>
                    <Typography tag='span' variant='body' color='black-bg'>{video.description}</Typography>
                 </div>
                 <video
                   src={`${__API__}${video.file}`}
                   controls
                 >
                    <source src={`${__API__}${video.file}`} />
                 </video>
                 <Comments id={video.id} />
              </div>
           </div>
        ))}
     </div>
  );
};

export const VideoList = React.memo(Component);
