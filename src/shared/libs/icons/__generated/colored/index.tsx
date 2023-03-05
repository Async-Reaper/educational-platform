import * as React from 'react';
import {SVGAttributes} from 'react';
import {ArrowToCubeIcon as arrow_to_cube} from './ArrowToCube';
import {ArrowToQuestionsIcon as arrow_to_questions} from './ArrowToQuestions';
import {BigPillarIcon as big_pillar} from './BigPillar';
import {BigPlayIcon as big_play} from './BigPlay';
import {BorderTestIcon as border_test} from './BorderTest';
import {Cube3DIcon as cube_3_d} from './Cube3D';
import {DottedPlayerIcon as dotted_player} from './DottedPlayer';
import {LineIcon as line} from './Line';
import {LogoIcon as logo} from './Logo';
import {MeshIcon as mesh} from './Mesh';
import {Message3DIcon as message_3_d} from './Message3D';
import {MiddlePillarIcon as middle_pillar} from './MiddlePillar';
import {PlayButtonPlayerIcon as play_button_player} from './PlayButtonPlayer';
import {Questions3DIcon as questions_3_d} from './Questions3D';
import {RadarCircleBigIcon as radar_circle_big} from './RadarCircleBig';
import {RadarCircleSmallIcon as radar_circle_small} from './RadarCircleSmall';
import {SecondWaveIcon as second_wave} from './SecondWave';
import {SectionWaveIcon as section_wave} from './SectionWave';
import {SmallPillarIcon as small_pillar} from './SmallPillar';
import {StatusOnlineIcon as status_online} from './StatusOnline';
import {TestArrowLeftIcon as test_arrow_left} from './TestArrowLeft';
import {TestArrowRightIcon as test_arrow_right} from './TestArrowRight';
import {TestBottomIcon as test_bottom} from './TestBottom';
import {TestCheckedIcon as test_checked} from './TestChecked';
import {TestLeftIcon as test_left} from './TestLeft';
import {TestRightIcon as test_right} from './TestRight';
import {TestTopIcon as test_top} from './TestTop';
import {ThirdWaveIcon as third_wave} from './ThirdWave';
import {WaveIcon as wave} from './Wave';

export type IconName =
  | 'arrow_to_cube'
  | 'arrow_to_questions'
  | 'big_pillar'
  | 'big_play'
  | 'border_test'
  | 'cube_3_d'
  | 'dotted_player'
  | 'line'
  | 'logo'
  | 'mesh'
  | 'message_3_d'
  | 'middle_pillar'
  | 'play_button_player'
  | 'questions_3_d'
  | 'radar_circle_big'
  | 'radar_circle_small'
  | 'second_wave'
  | 'section_wave'
  | 'small_pillar'
  | 'status_online'
  | 'test_arrow_left'
  | 'test_arrow_right'
  | 'test_bottom'
  | 'test_checked'
  | 'test_left'
  | 'test_right'
  | 'test_top'
  | 'third_wave'
  | 'wave';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  arrow_to_cube,
  arrow_to_questions,
  big_pillar,
  big_play,
  border_test,
  cube_3_d,
  dotted_player,
  line,
  logo,
  mesh,
  message_3_d,
  middle_pillar,
  play_button_player,
  questions_3_d,
  radar_circle_big,
  radar_circle_small,
  second_wave,
  section_wave,
  small_pillar,
  status_online,
  test_arrow_left,
  test_arrow_right,
  test_bottom,
  test_checked,
  test_left,
  test_right,
  test_top,
  third_wave,
  wave
};
