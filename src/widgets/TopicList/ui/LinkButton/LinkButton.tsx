import React, { type FC } from 'react';
import { AppLink, Typography } from 'shared/ui';

interface Props {
   courseId: number | undefined;
   topicId: number;
}

const Component: FC<Props> = ({ courseId, topicId }) => (
   <AppLink variant='secondary' to={`/course/${courseId}/topic/${topicId}`}>
      <Typography
         tag='span'
         variant='body'
         color='violet-primary'
      >
         Перейти
      </Typography>
   </AppLink>
);

export const LinkButton = React.memo(Component);
