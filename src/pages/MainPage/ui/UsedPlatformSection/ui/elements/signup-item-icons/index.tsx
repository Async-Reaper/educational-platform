import React from 'react';
import { Icon } from 'shared/libs/icons';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.icons__wrapper}>
      <div className={classNames(cls.icon, [cls.first])}>
         <Icon name='smartphone' color='white-bg' width={48} height={61} />
      </div>
      <div className={classNames(cls.icon, [cls.second])}>
         <Icon name='timer' color='violet-primary' width={86} height={68} />
      </div>
   </div>
);

export const SignupItemIcons = React.memo(Component);
