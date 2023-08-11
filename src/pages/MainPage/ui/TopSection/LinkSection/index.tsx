import React from 'react';
import {ColoredIcon, Icon} from 'shared/libs/icons';
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
                    width={30}
                    color='gray-primary'
                  />
               </a>
            </div>
         </div>
      </Link>
   </div>
);

export const LinkSection = React.memo(Component);
