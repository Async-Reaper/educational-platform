import React from 'react';
import { Typography } from 'shared/ui';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.description}>
      <Typography>
         Иногда работодатели устанавливают
         за кандидатами роботизированное наблюдение или просят пройти
         повторное тестирование.
      </Typography>
      <Typography>
         Узнайте, что именно отслеживает система.
         Опробуйте верификацию и прокторинг
         на нашей платформе!
      </Typography>
   </div>
);

export const Description = React.memo(Component);
