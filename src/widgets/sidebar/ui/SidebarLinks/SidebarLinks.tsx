import React, { useState } from 'react';
import { Icon } from 'shared/libs/icons';
import { AppLink } from 'shared/ui';
import { IconName } from 'shared/libs/icons/__generated/general';

interface ILinks {
  id: number;
  iconName: IconName;
  path: string;
}

const Component = () => {
  const [links] = useState<ILinks[]>([
    {
      id: 1,
      iconName: 'home',
      path: '/platform',

    },
    {
      id: 2,
      iconName: 'back',
      path: '/',
    },
  ]);

  return (
     <>
        {
            links.map((link) => (
               <AppLink to={link.path}>
                  <Icon name={link.iconName} size={46} color='violet-primary' />
               </AppLink>
            ))
        }
     </>
  );
};

export const SidebarLinks = React.memo(Component);
