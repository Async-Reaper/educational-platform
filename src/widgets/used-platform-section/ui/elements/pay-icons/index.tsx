import React from 'react';
import { Icon } from 'shared/libs/icons';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.pay__icons}>
      <div className={classNames(cls.icon)}>
         <Icon name='visa' color='violet-primary' width={61} height={19} />
      </div>
      <div className={classNames(cls.icon)}>
         <Icon name='mastercard' color='violet-primary' width={65} height={42} />
      </div>
      <div className={classNames(cls.icon, [cls.corr])}>
         <Icon name='guard' color='violet-primary' size={55} />
      </div>
   </div>
);

export const PayIcons = React.memo(Component);
