import * as React from 'react';
import {type SVGAttributes} from 'react';

export const StarIcon = React.memo(
	({
		size = 24,
		color = '#4E5361',
		...props
	}: SVGAttributes<SVGElement> & {
		size?: number;
	}) => (
		<svg width={size} height={size} fill='none' {...props}>
			<path
				d='M12.73 2.967a1.87 1.87 0 013.274 0l2.65 4.608c.267.464.704.795 1.21.916l5.02 1.205c1.405.337 1.959 2.114 1.012 3.248l-3.383 4.052c-.34.408-.507.944-.462 1.483l.453 5.352c.127 1.498-1.323 2.596-2.65 2.007l-4.74-2.103a1.838 1.838 0 00-1.495 0l-4.74 2.103c-1.327.589-2.776-.51-2.65-2.007l.453-5.352a2.047 2.047 0 00-.462-1.483l-3.383-4.052c-.946-1.134-.393-2.911 1.012-3.248L8.87 8.49a1.917 1.917 0 001.21-.916l2.65-4.608z'
				fill={color}
			/>
		</svg>
	),
);

StarIcon.displayName = 'StarIcon';
