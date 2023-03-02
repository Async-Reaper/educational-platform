import * as React from 'react';
import {SVGAttributes} from 'react';
import {ArrowBottomIcon as arrow_bottom} from './ArrowBottom';
import {ArrowRightIcon as arrow_right} from './ArrowRight';
import {ArrowRoundedIcon as arrow_rounded} from './ArrowRounded';
import {BackPlayerIcon as back_player} from './BackPlayer';
import {BorderArrowBottomIcon as border_arrow_bottom} from './BorderArrowBottom';
import {CheckRoundedIcon as check_rounded} from './CheckRounded';
import {CheckIcon as check} from './Check';
import {DevicesIcon as devices} from './Devices';
import {DocsIcon as docs} from './Docs';
import {FlagRightIcon as flag_right} from './FlagRight';
import {FullScreenIcon as full_screen} from './FullScreen';
import {LightnessIcon as lightness} from './Lightness';
import {LinePlayerIcon as line_player} from './LinePlayer';
import {LineIcon as line} from './Line';
import {LoadingIcon as loading} from './Loading';
import {MegaphoneIcon as megaphone} from './Megaphone';
import {MinusIcon as minus} from './Minus';
import {NextPlayerIcon as next_player} from './NextPlayer';
import {PlayIcon as play} from './Play';
import {PlusIcon as plus} from './Plus';
import {TgIcon as tg} from './Tg';
import {VerificationIcon as verification} from './Verification';
import {VolumeIcon as volume} from './Volume';
import {WkIcon as wk} from './Wk';
import {YoutubeIcon as youtube} from './Youtube';

export type IconName =
  | 'arrow_bottom'
  | 'arrow_right'
  | 'arrow_rounded'
  | 'back_player'
  | 'border_arrow_bottom'
  | 'check_rounded'
  | 'check'
  | 'devices'
  | 'docs'
  | 'flag_right'
  | 'full_screen'
  | 'lightness'
  | 'line_player'
  | 'line'
  | 'loading'
  | 'megaphone'
  | 'minus'
  | 'next_player'
  | 'play'
  | 'plus'
  | 'tg'
  | 'verification'
  | 'volume'
  | 'wk'
  | 'youtube';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  arrow_bottom,
  arrow_right,
  arrow_rounded,
  back_player,
  border_arrow_bottom,
  check_rounded,
  check,
  devices,
  docs,
  flag_right,
  full_screen,
  lightness,
  line_player,
  line,
  loading,
  megaphone,
  minus,
  next_player,
  play,
  plus,
  tg,
  verification,
  volume,
  wk,
  youtube
};
