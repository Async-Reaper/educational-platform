import * as React from 'react';
import {SVGAttributes} from 'react';
import {DiscountIcon as discount} from './Discount';
import {OnlineIcon as online} from './Online';
import {StatusOnlineIcon as status_online} from './StatusOnline';

export type IconName =
  | 'discount'
  | 'online'
  | 'status_online';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  discount,
  online,
  status_online
};
