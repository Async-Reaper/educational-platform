import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/libs/icons';
import { Button, Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => {
  const { t } = useTranslation('main');
  return (
     <div className={cls.content__buttons}>
        <Button variant='l' background='violet-primary'>
           <Typography tag='span' variant='body'>
              {t('Начать сейчас')}
           </Typography>
           <Icon name='play' size={22} />
        </Button>
        <Button variant='l' background='gray-primary' border>
           <Typography tag='span' variant='body'>
              {t('Подробнее')}
           </Typography>
           <Icon name='arrow_right' width={30} height={10} color='violet-primary' />
        </Button>
     </div>
  );
};

export const ButtonsGroup = React.memo(Component);
