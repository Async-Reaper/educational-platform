import React from 'react';
import { Icon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.link__sectionWrapper}>
      <div className={cls.link__sectionBackground}>
         <div className={cls.link__section}>
            <Icon
              className={cls.link__sectionIcon}
              name='arrow_bottom'
              width={14}
              color='gray-primary'
            />
         </div>
      </div>
      <div className={cls.border__link}>
         <Icon
           className={cls.border__linkIcon}
           name='border_arrow_bottom'
           width={85}
           height={65}
           color='violet-primary'
         />
      </div>
   </div>
);

export const LinkSection = React.memo(Component);
