import React, { useState } from 'react';
import { DeleteResource } from 'features';
import DeleteIcon from '@mui/icons-material/Delete';
import cls from '../styles.module.scss';
import { API_URL } from '../../../../shared/constants/baseURL';
import { ModalWindow, Typography } from '../../../../shared/ui';
import { ResourceType } from '../../model/types';
import { Comments } from '../comments';
import { getCookie } from '../../../../shared/libs/cookie';
import { ColoredIcon, Icon } from '../../../../shared/libs/icons';

interface Props {
  lectures: ResourceType[] | undefined
}

const Component: React.FC<Props> = ({ lectures }) => {
  const [isVisibleDeleteResource, setIsVisibleDeleteResource] = useState(false);

  return (
     <div className={cls.resources__list}>
        {lectures?.map((lecture) => (
           <>
              <ModalWindow isVisible={isVisibleDeleteResource} setIsVisible={setIsVisibleDeleteResource}>
                 <DeleteResource id={lecture.id} setVisible={setIsVisibleDeleteResource} />
              </ModalWindow>
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
                 <div className={cls.resource_text_info__wrapper}>
                    <Typography tag='span' variant='body' color='violet-primary'>
                       {lecture.name}
                    </Typography>
                    <Typography tag='span' variant='body' color='black-bg'>
                       {lecture.description}
                    </Typography>
                    <a
                      className={cls.link}
                      href={`${API_URL}${lecture.file}`}
                      target='_blank'
                      download
                      rel='noreferrer'
                    >
                       Ссылка
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
