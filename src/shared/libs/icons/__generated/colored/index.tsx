import * as React from 'react';
import {SVGAttributes} from 'react';
import {LogoIcon as logo} from './Logo';

export type IconName =
  | 'logo';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  logo
};
