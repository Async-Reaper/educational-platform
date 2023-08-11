import * as React from 'react';
import {SVGAttributes} from 'react';
import {DevicesIcon as devices} from './Devices';
import {DottedPlayerIcon as dotted_player} from './DottedPlayer';
import {LectureIcon as lecture} from './Lecture';
import {LineIcon as line} from './Line';
import {LogoIcon as logo} from './Logo';
import {PlayButtonPlayerIcon as play_button_player} from './PlayButtonPlayer';
import {PresentationIcon as presentation} from './Presentation';
import {SecondWaveIcon as second_wave} from './SecondWave';
import {SectionWaveIcon as section_wave} from './SectionWave';
import {StatusOnlineIcon as status_online} from './StatusOnline';
import {TestCheckedIcon as test_checked} from './TestChecked';
import {ThirdWaveIcon as third_wave} from './ThirdWave';
import {WaveIcon as wave} from './Wave';

export type IconName =
  | 'devices'
  | 'dotted_player'
  | 'lecture'
  | 'line'
  | 'logo'
  | 'play_button_player'
  | 'presentation'
  | 'second_wave'
  | 'section_wave'
  | 'status_online'
  | 'test_checked'
  | 'third_wave'
  | 'wave';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  devices,
  dotted_player,
  lecture,
  line,
  logo,
  play_button_player,
  presentation,
  second_wave,
  section_wave,
  status_online,
  test_checked,
  third_wave,
  wave,
};
