import React, { type FC } from 'react';
import { Image, Typography } from 'shared/ui';

interface Props {
  name: string;
  src: string;
}

const Component: FC<Props> = ({ name, src }) => (
   <div className='course__wrapper'>
      <div className='course__bookmark' />
      <div className='course__title'>
         <Typography tag='h1' variant='h3'>{name}</Typography>
      </div>
      <div>
         <Image name='img' src={src} />
      </div>
   </div>
);

export const Course = React.memo(Component);
