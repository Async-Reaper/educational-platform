import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => {
  const { t } = useTranslation('main');
  return (
     <div className={cls.content__text}>
        <Typography variant='h2' color='white-bg'>
           {t('Первая интеллектуальная платформа ')}
           <span>{t('для обмена педагогическим опытом')}</span>
        </Typography>
        <Typography variant='h3' color='gray-primary'>
           {t('от эксперта Светланы Курановой')}
        </Typography>
     </div>
  );
};

export const TextContent = React.memo(Component);
