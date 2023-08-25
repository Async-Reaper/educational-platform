import React, { ReactNode } from 'react';

interface ConditionsProps {
   conditions: any;
   children: ReactNode;
}

const Component = ({ children, conditions }: ConditionsProps) => {
   if (conditions) {
      return <>{children}</>;
   }
   return null;
};

export const ConditionsBoolean = React.memo(Component);
