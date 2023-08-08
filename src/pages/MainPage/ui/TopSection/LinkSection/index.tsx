import React from 'react';
import { Icon } from 'shared/libs/icons';
import { Link } from 'react-scroll';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.link__sectionWrapper}>
      <Link to='lesson' spy smooth duration={500}>
         <div className={cls.link__sectionBackground}>
            <div className={cls.link__section}>
               <a>
                  <Icon
                    className={cls.link__sectionIcon}
                    name='arrow_bottom'
                    width={14}
                    color='gray-primary'
                  />
               </a>
            </div>
         </div>
      </Link>
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
