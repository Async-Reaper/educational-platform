import * as React from 'react';
import {type SVGAttributes} from 'react';

export const MailIcon = React.memo(
	({
		size = 24,
		color = '#4E5361',
		...props
	}: SVGAttributes<SVGElement> & {
		size?: number;
	}) => (
		<svg width={size} height={size} fill='none' {...props}>
			<path
				d='M22.806 5.143L16.134 12l6.672 6.857c.12-.26.194-.55.194-.857V6c0-.308-.073-.596-.194-.857zM21.066 4H2.934a1.86 1.86 0 00-.829.2l8.528 8.777c.754.78 1.98.78 2.734 0L21.895 4.2a1.86 1.86 0 00-.829-.2zM1.194 5.143C1.074 5.403 1 5.693 1 6v12c0 .308.073.596.194.857L7.866 12 1.194 5.143z'
				fill={color}
			/>
			<path
				d='M15.223 12.943l-.945.976a3.15 3.15 0 01-4.557 0l-.944-.976L2.105 19.8c.252.124.53.2.829.2h18.132c.298 0 .577-.076.829-.2l-6.672-6.857z'
				fill={color}
			/>
		</svg>
	),
);

MailIcon.displayName = 'MailIcon';
