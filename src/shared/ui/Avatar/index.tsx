import React, { type FC } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

type Props = {
   variant?: DesignSystemSize;
   rounded?: boolean;
   src: any;
};

const Component: FC<Props> = (props) => {
   const {
      variant = 'l',
      src = '',
      rounded = false,
   } = props;

   const additional = [
      cls[`variant--${variant}`],
   ];

   const mods = {
      [cls.rounded]: rounded,
   };

   return (
      <div className={classNames(cls.avatar, additional, mods)}>
         <img
            className={classNames(cls.avatarImage, [])}
            src={src}
            alt='User avatar'
         />
      </div>
   );
};

export const Avatar = React.memo(Component);
