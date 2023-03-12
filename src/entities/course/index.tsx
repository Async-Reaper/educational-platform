import React, { type FC } from 'react';
import { Typography } from 'shared/ui';
import { CourseBookmark, CourseWrapper } from 'entities/course/ui';

interface Props {
  name: string;
  src?: string;
}

const Component: FC<Props> = ({ name, src }) => (
   <CourseWrapper>
      <CourseBookmark />
      <div className='course__title'>
         <Typography tag='h1' variant='h3' color='gray-primary'>{name}</Typography>
      </div>
      <div>
         {
          src
            ? <img alt='img' src={src} />
            : null
          }
      </div>
   </CourseWrapper>
);

export const Course = React.memo(Component);
