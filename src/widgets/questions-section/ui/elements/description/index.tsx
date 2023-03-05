import React from 'react';
import { Typography } from 'shared/ui';

const Component = () => (
   <Typography>
      Скопируйте текст письма о назначении тестов
      и ответьте на несколько вопросов.
      Наш алгоритм определит систему тестирования,
      сформирует курс и укажет цену.
   </Typography>
);

export const Description = React.memo(Component);
