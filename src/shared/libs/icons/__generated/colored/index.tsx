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
  wave
};
