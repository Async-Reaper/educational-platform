import * as React from 'react';
import {SVGAttributes} from 'react';
import {ArrowBottomIcon as arrow_bottom} from './ArrowBottom';
import {ArrowRightIcon as arrow_right} from './ArrowRight';
import {ArrowRoundedIcon as arrow_rounded} from './ArrowRounded';
import {BorderArrowBottomIcon as border_arrow_bottom} from './BorderArrowBottom';
import {CheckRoundedIcon as check_rounded} from './CheckRounded';
import {CheckIcon as check} from './Check';
import {DocsIcon as docs} from './Docs';
import {FlagRightIcon as flag_right} from './FlagRight';
import {LightnessIcon as lightness} from './Lightness';
import {LineIcon as line} from './Line';
import {LoadingIcon as loading} from './Loading';
import {MinusIcon as minus} from './Minus';
import {PlayIcon as play} from './Play';
import {PlusIcon as plus} from './Plus';
import {TgIcon as tg} from './Tg';
import {VerificationIcon as verification} from './Verification';
import {WkIcon as wk} from './Wk';
import {YoutubeIcon as youtube} from './Youtube';

export type IconName =
  | 'arrow_bottom'
  | 'arrow_right'
  | 'arrow_rounded'
  | 'border_arrow_bottom'
  | 'check_rounded'
  | 'check'
  | 'docs'
  | 'flag_right'
  | 'lightness'
  | 'line'
  | 'loading'
  | 'minus'
  | 'play'
  | 'plus'
  | 'tg'
  | 'verification'
  | 'wk'
  | 'youtube';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  arrow_bottom,
  arrow_right,
  arrow_rounded,
  border_arrow_bottom,
  check_rounded,
  check,
  docs,
  flag_right,
  lightness,
  line,
  loading,
  minus,
  play,
  plus,
  tg,
  verification,
  wk,
  youtube
};
