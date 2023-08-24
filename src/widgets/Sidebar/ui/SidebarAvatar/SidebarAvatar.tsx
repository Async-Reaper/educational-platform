import React from 'react';
import { AppLink, Avatar } from 'shared/ui';
import { Icon } from 'shared/libs/icons';
import { UserType } from 'entities/User';
import ava from '../../../../../public/images/mock/ava.png';

interface Props {
   user: UserType | undefined | null;
   token: string;
}

const Component = ({ user, token }: Props) => (
   <AppLink to='/private-cabinet'>
      {
         user || token
            ? (
               <Avatar
                  src={user?.icon
                     ? `${__API__}${user?.icon}`
                     : ava}
                  variant='l'
                  rounded
               />
            )
            : <Icon name='user' color='violet-primary' size={46} />
      }
   </AppLink>
);

export const SidebarAvatar = React.memo(Component);
