import * as React from 'react';
import {type SVGAttributes} from 'react';

export const SuccessRoundedIcon = React.memo(
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
				d='M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-12.042.75a.426.426 0 01.603-.602l1.312 1.31 3.565-3.565a.426.426 0 01.603.603l-3.855 3.855a.469.469 0 01-.034.033.426.426 0 01-.63-.07l-1.564-1.563z'
				fill={color}
			/>
		</svg>
	),
);

SuccessRoundedIcon.displayName = 'SuccessRoundedIcon';
