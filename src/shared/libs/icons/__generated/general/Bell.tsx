import * as React from 'react';
import {type SVGAttributes} from 'react';

export const BellIcon = React.memo(
	({
		size = 24,
		color = '#4E5361',
		...props
	}: SVGAttributes<SVGElement> & {
		size?: number;
	}) => (
		<svg width={size} height={size} fill='none' {...props}>
			<g clipPath='url(#bell_svg__a)' fill={color}>
				<path d='M17.816 14.094a5.582 5.582 0 01-1.983-4.27V7.5c0-2.933-2.178-5.36-5-5.767v-.9a.833.833 0 10-1.666 0v.9c-2.823.407-5 2.834-5 5.767v2.323a5.59 5.59 0 01-1.99 4.278 1.46 1.46 0 00.948 2.566h13.75a1.46 1.46 0 00.94-2.573zM10 20a3.13 3.13 0 003.062-2.5H6.938A3.13 3.13 0 0010 20z' />
			</g>
			<defs>
				<clipPath id='bell_svg__a'>
					<path fill={color} d='M0 0h20v20H0z' />
				</clipPath>
			</defs>
		</svg>
	),
);

BellIcon.displayName = 'BellIcon';
