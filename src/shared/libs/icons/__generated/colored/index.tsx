import * as React from 'react';
import {SVGAttributes} from 'react';
import {LogoIcon as logo} from './Logo';
import {StatusOnlineIcon as status_online} from './StatusOnline';

export type IconName =
  | 'logo'
  | 'status_online';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  logo,
  status_online
};
