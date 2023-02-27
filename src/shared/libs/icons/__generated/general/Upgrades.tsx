import * as React from 'react';
import {type SVGAttributes} from 'react';

export const UpgradesIcon = React.memo(
	({
		size = 24,
		color = '#4E5361',
		...props
	}: SVGAttributes<SVGElement> & {
		size?: number;
	}) => (
		<svg width={size} height={size} fill='none' {...props}>
			<path
				d='M18.974 23.56c-.782 0-1.493-.42-1.829-1.08l-4.032-7.93c-.732-1.438-2.925-1.438-3.657 0l-4.074 8.014c-.31.608-.966.996-1.688.996-.72 0-1.378-.388-1.687-.996L.902 20.391a1.779 1.779 0 010-1.622L9.456 1.945c.732-1.44 2.925-1.44 3.657 0L21.988 19.4c.26.513.26 1.109 0 1.622l-.742 1.46c-.336.659-1.047 1.08-1.829 1.08h-.443z'
				fill={color}
			/>
			<path
				d='M14.432 23.03c.406.798-.169 1.727-1.11 1.798l-4.01.301c-1.036.078-1.774-.92-1.328-1.797l2.082-4.094c.488-.96 1.95-.96 2.438 0l1.928 3.793z'
				fill={color}
			/>
		</svg>
	),
);

UpgradesIcon.displayName = 'UpgradesIcon';
