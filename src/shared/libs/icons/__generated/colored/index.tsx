import * as React from 'react';
import {SVGAttributes} from 'react';
import {LineIcon as line} from './Line';
import {LogoIcon as logo} from './Logo';
import {StatusOnlineIcon as status_online} from './StatusOnline';
import {WaveIcon as wave} from './Wave';

export type IconName =
  | 'line'
  | 'logo'
  | 'status_online'
  | 'wave';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  line,
  logo,
  status_online,
  wave
};
