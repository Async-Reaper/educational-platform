import React from 'react';
import { Typography } from '../../../../shared/ui';

interface ValidateBrainsProps {
   typeBrains: 'humanitarian' | 'technical' | 'mixed'
}

const Component = ({ typeBrains }: ValidateBrainsProps) => (
   <div>
      <Typography color='violet-primary'>
         По результатам теста у вас 
         {' '}
         {
            typeBrains === 'mixed'
               ? 'смешанный'
               : typeBrains === 'humanitarian'
                  ? 'гуманитарный'
                  : 'технический'
         }
         {' '}
         тип мышления. 
         {' '}
         <br />
      </Typography>
      <Typography color='black-bg'>
         Советуем изучить одну из профессий:
         {
            typeBrains === 'mixed'
               ? ' фотограф, учитель, программист, инженер'
               : typeBrains === 'humanitarian'
                  ? ' фотограф, учитель, психолог, переводчик'
                  : ' программист, инженер, архитектор'
         }
      </Typography>
   </div>
);

export const ValidateBrains = React.memo(Component);
