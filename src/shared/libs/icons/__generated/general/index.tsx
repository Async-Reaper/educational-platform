import * as React from 'react';
import {SVGAttributes} from 'react';
import {AllIcon as all} from './All';
import {AnchorIcon as anchor} from './Anchor';
import {ArrowBottomIcon as arrow_bottom} from './ArrowBottom';
import {ArrowLeftIcon as arrow_left} from './ArrowLeft';
import {ArrowRightIcon as arrow_right} from './ArrowRight';
import {ArrowIcon as arrow} from './Arrow';
import {BeltIcon as belt} from './Belt';
import {BoxIcon as box} from './Box';
import {BurgerIcon as burger} from './Burger';
import {CasesIcon as cases} from './Cases';
import {CheckRoundedIcon as check_rounded} from './CheckRounded';
import {CheckIcon as check} from './Check';
import {CloseIcon as close} from './Close';
import {ContractsIcon as contracts} from './Contracts';
import {CrossIcon as cross} from './Cross';
import {CrownIcon as crown} from './Crown';
import {DashboardIcon as dashboard} from './Dashboard';
import {DiscordIcon as discord} from './Discord';
import {DollarRoundedIcon as dollar_rounded} from './DollarRounded';
import {DollarIcon as dollar} from './Dollar';
import {DownloadIcon as download} from './Download';
import {ExchangeIcon as exchange} from './Exchange';
import {FireIcon as fire} from './Fire';
import {GiftIcon as gift} from './Gift';
import {HandshakeIcon as handshake} from './Handshake';
import {HistoryIcon as history} from './History';
import {InformationIcon as information} from './Information';
import {InstagramIcon as instagram} from './Instagram';
import {KeyIcon as key} from './Key';
import {LoadingIcon as loading} from './Loading';
import {LockIcon as lock} from './Lock';
import {MinusIcon as minus} from './Minus';
import {MuteIcon as mute} from './Mute';
import {PeopleIcon as people} from './People';
import {PlusIcon as plus} from './Plus';
import {RefreshIcon as refresh} from './Refresh';
import {RouletteArrowIcon as roulette_arrow} from './RouletteArrow';
import {ShoppingCartIcon as shopping_cart} from './ShoppingCart';
import {SnowflakeIcon as snowflake} from './Snowflake';
import {StandboxIcon as standbox} from './Standbox';
import {SteamIcon as steam} from './Steam';
import {StrokeIcon as stroke} from './Stroke';
import {TelegramIcon as telegram} from './Telegram';
import {TiktokIcon as tiktok} from './Tiktok';
import {UnmuteIcon as unmute} from './Unmute';
import {UpIcon as up} from './Up';
import {UserIcon as user} from './User';
import {VkIcon as vk} from './Vk';
import {WalletIcon as wallet} from './Wallet';

export type IconName =
  | 'all'
  | 'anchor'
  | 'arrow_bottom'
  | 'arrow_left'
  | 'arrow_right'
  | 'arrow'
  | 'belt'
  | 'box'
  | 'burger'
  | 'cases'
  | 'check_rounded'
  | 'check'
  | 'close'
  | 'contracts'
  | 'cross'
  | 'crown'
  | 'dashboard'
  | 'discord'
  | 'dollar_rounded'
  | 'dollar'
  | 'download'
  | 'exchange'
  | 'fire'
  | 'gift'
  | 'handshake'
  | 'history'
  | 'information'
  | 'instagram'
  | 'key'
  | 'loading'
  | 'lock'
  | 'minus'
  | 'mute'
  | 'people'
  | 'plus'
  | 'refresh'
  | 'roulette_arrow'
  | 'shopping_cart'
  | 'snowflake'
  | 'standbox'
  | 'steam'
  | 'stroke'
  | 'telegram'
  | 'tiktok'
  | 'unmute'
  | 'up'
  | 'user'
  | 'vk'
  | 'wallet';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  all,
  anchor,
  arrow_bottom,
  arrow_left,
  arrow_right,
  arrow,
  belt,
  box,
  burger,
  cases,
  check_rounded,
  check,
  close,
  contracts,
  cross,
  crown,
  dashboard,
  discord,
  dollar_rounded,
  dollar,
  download,
  exchange,
  fire,
  gift,
  handshake,
  history,
  information,
  instagram,
  key,
  loading,
  lock,
  minus,
  mute,
  people,
  plus,
  refresh,
  roulette_arrow,
  shopping_cart,
  snowflake,
  standbox,
  steam,
  stroke,
  telegram,
  tiktok,
  unmute,
  up,
  user,
  vk,
  wallet
};
