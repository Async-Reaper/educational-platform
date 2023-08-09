import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from 'shared/ui';
import { ResourceType } from 'entities/Topic';
import { getCookie } from 'shared/libs/cookie';
import { DeleteResourceModal } from 'features/DeleteResource';
import { useModal } from 'shared/hooks/useModal/useModal';
import { Comments } from '../Comments/Comments';
import cls from '../styles.module.scss';

interface Props {
  presentations: ResourceType[] | undefined
}

const Component = ({ presentations }: Props) => {
  const { isOpen, open, close } = useModal();

  return (
     <div className={cls.resources__list}>
        {presentations?.map((presentation) => (
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
                     id={presentation.id}
                     isOpen={isOpen}
                     onClose={close}
                   />
                   )
               }
              <div className={cls.resource_text_info__wrapper}>
                 <Typography tag='span' variant='h3' color='violet-primary'>
                    {presentation.name}
                 </Typography>
                 <Typography tag='span' variant='body' color='black-bg'>
                    {presentation.description}
                 </Typography>
                 <a
                   className={cls.link}
                   href={`${__API__}${presentation.file}`}
                   target='_blank'
                   download
                   rel='noreferrer'
                 >
                     <Typography tag='span' variant='body' color='black-bg'>
                         Ссылка
                     </Typography>
                 </a>
              </div>
              <Comments id={presentation.id} />
           </div>
        ))}
     </div>
  );
};

export const PresentationList = React.memo(Component);
