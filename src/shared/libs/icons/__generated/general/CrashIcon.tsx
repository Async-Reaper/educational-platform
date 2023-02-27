import * as React from 'react';
import {type SVGAttributes} from 'react';

export const CrashIconIcon = React.memo(
	({
		size = 24,
		color = '#4E5361',
		...props
	}: SVGAttributes<SVGElement> & {
		size?: number;
	}) => (
		<svg width={size} height={size} viewBox='0 0 24 24' fill='none' {...props}>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M11.944 7.183l-5.595 4.8c-.504.432-1.313.429-1.813-.009l-.81-.71c-.49-.427-.506-1.116-.037-1.56l7.165-6.808c.217-.206.501-.325.796-.356.472-.14 1.016-.033 1.372.313l7.067 6.851c.46.446.44 1.129-.045 1.554l-.81.709c-.504.44-1.32.44-1.823 0l-5.467-4.784zm-.847 3.628a1.068 1.068 0 011.372-.004l4.307 3.77a.773.773 0 010 1.195l-.79.691c-.377.33-.989.33-1.367 0l-2.834-2.48-2.834 2.48c-.377.33-.99.33-1.367 0l-.79-.69a.773.773 0 010-1.197l4.303-3.765zm.201 6.229a.89.89 0 01.842-.165c.116.033.225.09.318.17l2.095 1.834a.645.645 0 010 .997l-.586.513a.889.889 0 01-1.139 0l-.954-.834-.946.828a.89.89 0 01-1.14 0l-.585-.513a.645.645 0 010-.997l2.095-1.833z'
				fill={color}
			/>
		</svg>
	),
);

CrashIconIcon.displayName = 'CrashIconIcon';
