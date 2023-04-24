import React, { type FC } from 'react';
import { AppLink, Typography } from 'shared/ui';

interface Props {
  courseId: string | undefined;
  topicId: number;
}

const Component: FC<Props> = ({ courseId, topicId }) => (
   <AppLink variant='secondary' to={`/course/${courseId}/topic/${topicId}`}>
      <Typography
        tag='span'
        variant='small'
        color='violet-primary'
      >
         Перейти
      </Typography>
   </AppLink>
);

export const LinkButton = React.memo(Component);
