import React, { type FC } from 'react';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

interface Props {
  number: string
}

const Component: FC<Props> = ({ number }) => (
   <div className={cls.bookmark}>
      <Typography tag='b' variant='h3' color='white-bg'>
         {number}
      </Typography>
   </div>
);

export const Bookmark = React.memo(Component);
