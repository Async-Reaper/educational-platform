import React, { FC, useCallback } from 'react';
import { Icon } from 'shared/libs/icons';
import { Typography } from 'shared/ui';
import { useNavigate } from 'react-router-dom';
import cls from './styles.module.scss';

interface Props {
   typeLearn: any;
   setTypeLearnHandler: (params: string) => void;
}

const Component: FC<Props> = ({ typeLearn, setTypeLearnHandler }) => {
   const navigate = useNavigate();

   const backToCourse = useCallback(() => {
      navigate(-1);
      setTypeLearnHandler('');
   }, [navigate, setTypeLearnHandler]);

   return (
      <>
         {
            typeLearn
               ? (
                  <div className={cls.back__link} onClick={() => setTypeLearnHandler('')}>
                     <div className={cls.icon__wrapper}>
                        <Icon name='play' color='violet-primary' width={16} height={18} />
                     </div>
                     <div>
                        <Typography tag='span' variant='body' color='gray-primary'>
                           Выбрать другой способ обучения
                        </Typography>
                     </div>
                  </div>
               )
               : (
                  <div className={cls.back__link} onClick={backToCourse}>
                     <div className={cls.icon__wrapper}>
                        <Icon name='play' color='violet-primary' width={16} height={18} />
                     </div>
                     <div>
                        <Typography tag='span' variant='body' color='gray-primary'>
                           Выбрать другую тему
                        </Typography>
                     </div>
                  </div>
               )
         }
      </>
   );
};

export const NavigateBack = React.memo(Component);
