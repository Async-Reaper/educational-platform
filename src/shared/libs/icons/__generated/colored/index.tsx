import * as React from 'react';
import {SVGAttributes} from 'react';
import {LogoIcon as logo} from './Logo';
import {StatusOnlineIcon as status_online} from './StatusOnline';
import {TestArrowLeftIcon as test_arrow_left} from './TestArrowLeft';
import {TestArrowRightIcon as test_arrow_right} from './TestArrowRight';
import {TestBottomIcon as test_bottom} from './TestBottom';
import {TestCheckedIcon as test_checked} from './TestChecked';
import {TestLeftIcon as test_left} from './TestLeft';
import {TestRightIcon as test_right} from './TestRight';
import {TestTopIcon as test_top} from './TestTop';
import {WaveIcon as wave} from './Wave';

export type IconName =
  | 'logo'
  | 'status_online'
  | 'test_arrow_left'
  | 'test_arrow_right'
  | 'test_bottom'
  | 'test_checked'
  | 'test_left'
  | 'test_right'
  | 'test_top'
  | 'wave';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  logo,
  status_online,
  test_arrow_left,
  test_arrow_right,
  test_bottom,
  test_checked,
  test_left,
  test_right,
  test_top,
  wave
};
