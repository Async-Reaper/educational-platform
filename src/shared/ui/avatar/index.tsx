import React, { type FC } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './styles.module.scss';

type Variant = 'xs' | 'l' | 'xl';

type Props = {
  variant?: Variant;
  rounded?: boolean;
  src: any;
};

const Component: FC<Props> = (props) => {
  const {
    variant = 'l',
    src = '',
    rounded = false,
  } = props;

  return (
     <div className={classNames(cls.avatar, [cls[`variant--${variant}`]], { [cls.rounded]: rounded })}>
        <img
          className={classNames(cls.avatarImage, [])}
          src={src}
          alt='User avatar'
        />
     </div>
  );
};

export const Avatar = React.memo(Component);
