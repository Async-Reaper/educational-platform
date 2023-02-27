import * as React from 'react';
import {type SVGAttributes} from 'react';

export const ArrowRoundedIcon = React.memo(
	({
		size = 24,
		color = '#4E5361',
		...props
	}: SVGAttributes<SVGElement> & {
		size?: number;
	}) => (
		<svg width={size} height={size} fill='none' {...props}>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M12 21a9 9 0 100-18 9 9 0 000 18zm-.6-12.3a.6.6 0 111.2 0v5.152l.776-.776a.6.6 0 01.848.848l-1.8 1.8a.6.6 0 01-.848 0l-1.8-1.8a.6.6 0 01.848-.848l.776.775V8.7z'
				fill={color}
			/>
		</svg>
	),
);

ArrowRoundedIcon.displayName = 'ArrowRoundedIcon';
