import React, { type FC } from 'react';
import { Typography } from 'shared/ui';
import { CourseBookmark, CourseWrapper } from './ui';

interface Props {
  name: string;
  creator?: string;
  onClick: () => void
}

const Component: FC<Props> = ({ name, creator, onClick }) => (
   <CourseWrapper onClick={onClick}>
      <CourseBookmark />
      <div className='course__title'>
         <Typography tag='h1' variant='body'>{name}</Typography>
      </div>
      <div>
         <div>
            {
              creator
                ? <Typography tag='h1' variant='body'>{creator}</Typography>
                : null
            }
         </div>
      </div>
   </CourseWrapper>
);

export const PlatformCourse = React.memo(Component);
