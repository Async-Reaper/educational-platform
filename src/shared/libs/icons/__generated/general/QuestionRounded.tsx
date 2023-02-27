import * as React from 'react';
import {type SVGAttributes} from 'react';

export const QuestionRoundedIcon = React.memo(
	({
		size = 24,
		color = '#4E5361',
		...props
	}: SVGAttributes<SVGElement> & {
		size?: number;
	}) => (
		<svg width={size} height={size} fill='none' {...props}>
			<path
				d='M12 3a9 9 0 109 9 9.012 9.012 0 00-9-9zm-.226 14.01a.915.915 0 110-1.83.915.915 0 010 1.83zm1.568-4.39a1.144 1.144 0 00-.805 1.098.763.763 0 01-1.526 0 2.664 2.664 0 011.88-2.557 1.147 1.147 0 00.808-1.098 1.699 1.699 0 00-3.395 0 .762.762 0 11-1.526 0 3.225 3.225 0 016.447 0 2.665 2.665 0 01-1.883 2.556z'
				fill={color}
			/>
		</svg>
	),
);

QuestionRoundedIcon.displayName = 'QuestionRoundedIcon';
