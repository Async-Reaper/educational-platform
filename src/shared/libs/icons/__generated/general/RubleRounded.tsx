import * as React from 'react';
import {type SVGAttributes} from 'react';

export const RubleRoundedIcon = React.memo(
	({
		size = 24,
		color = '#4E5361',
		...props
	}: SVGAttributes<SVGElement> & {
		size?: number;
	}) => (
		<svg width={size} height={size} fill='none' {...props}>
			<path
				d='M13.287 10.363c.21.154.315.377.315.668 0 .298-.105.526-.315.686-.205.154-.5.232-.886.232h-1.185V10.13H12.4c.386 0 .681.078.886.232z'
				fill={color}
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M12 21a9 9 0 100-18 9 9 0 000 18zm-.784-7.483v-.48h1.193c.813 0 1.446-.171 1.9-.514.46-.343.691-.843.691-1.5 0-.663-.23-1.166-.69-1.509-.455-.343-1.088-.514-1.9-.514H9.826v4.517H9v.712h.827V15h1.389v-.771h1.84v-.712h-1.84z'
				fill={color}
			/>
		</svg>
	),
);

RubleRoundedIcon.displayName = 'RubleRoundedIcon';
