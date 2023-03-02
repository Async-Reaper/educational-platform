import * as React from 'react';
import {SVGAttributes} from 'react';
import {BigPlayIcon as big_play} from './BigPlay';
import {DottedPlayerIcon as dotted_player} from './DottedPlayer';
import {LineIcon as line} from './Line';
import {LogoIcon as logo} from './Logo';
import {PlayButtonPlayerIcon as play_button_player} from './PlayButtonPlayer';
import {RadarCircleBigIcon as radar_circle_big} from './RadarCircleBig';
import {RadarCircleSmallIcon as radar_circle_small} from './RadarCircleSmall';
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
  | 'big_play'
  | 'dotted_player'
  | 'line'
  | 'logo'
  | 'play_button_player'
  | 'radar_circle_big'
  | 'radar_circle_small'
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
  big_play,
  dotted_player,
  line,
  logo,
  play_button_player,
  radar_circle_big,
  radar_circle_small,
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
