import * as React from 'react';
import {type SVGAttributes} from 'react';

export const LogoutIcon = React.memo(
	({
		size = 24,
		color = '#4E5361',
		...props
	}: SVGAttributes<SVGElement> & {
		size?: number;
	}) => (
		<svg width={size} height={size} fill='none' {...props}>
			<path
				d='M14.25 12.75a.75.75 0 00-.75.75v3.001a.75.75 0 01-.75.75H10.5V6.001c0-.641-.408-1.214-1.021-1.427L9.257 4.5h3.493a.75.75 0 01.75.75V7.5a.75.75 0 101.5 0V5.25C15 4.01 13.99 3 12.75 3H4.687c-.028 0-.052.013-.08.016C4.571 3.013 4.537 3 4.5 3 3.672 3 3 3.673 3 4.5v13.501c0 .64.408 1.213 1.021 1.426l4.514 1.505c.153.047.305.07.465.07.827 0 1.5-.673 1.5-1.5v-.75h2.25c1.24 0 2.25-1.01 2.25-2.25V13.5a.75.75 0 00-.75-.75z'
				fill={color}
			/>
			<path
				d='M20.781 9.97l-3-3a.75.75 0 00-1.28.53v2.25h-3a.75.75 0 000 1.5h3v2.25a.751.751 0 001.28.531l3-3a.75.75 0 000-1.06z'
				fill={color}
			/>
		</svg>
	),
);

LogoutIcon.displayName = 'LogoutIcon';
