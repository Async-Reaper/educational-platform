import React, { ReactNode } from 'react';

interface ConditionsValueProps {
   condition: any;
   conditionValue: any;
   children: ReactNode;
} 

const Component = ({ condition, conditionValue, children }: ConditionsValueProps) => {
   if (condition === conditionValue) {
      return (
         <>
            {children}
         </>
      );
   }
    
   return null;
};

export const ConditionsValue = React.memo(Component);
