import React, { type FC } from 'react';
import { Typography } from 'shared/ui';
import { CourseBookmark, CourseWrapper, TitleWrapper } from 'entities/course/ui';

interface Props {
  name: string;
  src?: string;
}

const Component: FC<Props> = ({ name, src }) => (
   <CourseWrapper onClick={() => localStorage.setItem('course', JSON.stringify(name))}>
      <CourseBookmark />
      <TitleWrapper>
         <Typography tag='h1' variant='body' color='gray-primary'>{name}</Typography>
      </TitleWrapper>
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
