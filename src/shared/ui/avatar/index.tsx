import React, { type FC } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './styles.module.scss';

type Variant = 'xs' | 'l' | 'xl';

type Props = {
  variant?: Variant;
  rounded?: boolean;
  src: string;
  isOnline?: boolean;
};

const Component: FC<Props> = (props) => {
  const {
    variant = 'l',
    src = '',
    rounded = false,
    isOnline = false,
  } = props;

  return (
     <div className={classNames(cls.avatar, [cls[`variant--${variant}`]])}>
        <img className={classNames(cls.avatarImage, [], { [cls.rounded]: rounded })} src={src} alt='User avatar' />
        {isOnline && variant !== 'xs' ? (
           <div className={classNames(cls.status)}>
              <ColoredIcon name='status_online' size={16} />
           </div>
        ) : null}
     </div>
  );
};

export const Avatar = React.memo(Component);
