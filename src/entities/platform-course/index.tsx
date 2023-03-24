import React, { type FC } from 'react';
import { Typography } from 'shared/ui';
import { CourseBookmark, CourseWrapper } from './ui';

interface Props {
  name: string;
  onClick: () => void
}

const Component: FC<Props> = ({ name, onClick }) => (
   <CourseWrapper onClick={onClick}>
      <CourseBookmark />
      <div className='course__title'>
         <Typography tag='h1' variant='body'>{name}</Typography>
      </div>
   </CourseWrapper>
);

export const PlatformCourse = React.memo(Component);
