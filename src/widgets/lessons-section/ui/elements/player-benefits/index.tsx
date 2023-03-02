import React from 'react';
import { Typography } from 'shared/ui';
import { Icon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.playerBenefits}>
      <Icon name='devices' color='violet-primary' width={60} height={46} />
      <Typography tag='span' variant='h3' color='gray-primary'>
         Удобно смотреть c любого устройства
      </Typography>
   </div>
);

export const PlayerBenefits = React.memo(Component);
