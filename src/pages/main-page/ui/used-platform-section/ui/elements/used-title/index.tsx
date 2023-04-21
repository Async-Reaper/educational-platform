import React, { type FC } from 'react';
import { Typography } from 'shared/ui';

interface Props {
  text: string;
}

const Component: FC<Props> = ({ text }) => (
   <Typography tag='h3' variant='h3' color='gray-primary'>
      {text}
   </Typography>
);

export const UsedTitle = React.memo(Component);
