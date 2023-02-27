import * as React from 'react';
import {type SVGAttributes} from 'react';

export const DeclineRoundedIcon = React.memo(
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
				d='M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.814 10.393a.41.41 0 11.579-.579l1.735 1.736 1.736-1.736a.41.41 0 01.579.579l-1.736 1.735 1.736 1.736a.41.41 0 01-.58.578l-1.735-1.735-1.735 1.735a.41.41 0 01-.579-.578l1.736-1.736-1.736-1.735z'
				fill={color}
			/>
		</svg>
	),
);

DeclineRoundedIcon.displayName = 'DeclineRoundedIcon';
