import * as React from 'react';
import {type SVGAttributes} from 'react';

export const SoundIcon = React.memo(
	({
		size = 24,
		color = '#4E5361',
		...props
	}: SVGAttributes<SVGElement> & {
		size?: number;
	}) => (
		<svg width={size} height={size} fill='none' {...props}>
			<path
				d='M15.37 19.3v-1.75c2.735 0 4.972-2.36 4.972-5.245 0-2.885-2.237-5.245-4.971-5.245V5.31C19.044 5.311 22 8.46 22 12.305c0 3.847-2.984 6.994-6.63 6.994zm-2.46.7a.851.851 0 01-.385-.088l-5.084-2.74V6.826l5.084-2.739a1.027 1.027 0 01.828 0 .92.92 0 01.387.758v14.28c0 .32-.138.611-.387.758a.838.838 0 01-.442.117zM2 15.948V8.08c0-.496.359-.874.828-.874h2.984v9.617H2.828c-.47 0-.828-.379-.828-.875zm16.685-3.643c0 1.924-1.492 3.497-3.314 3.497v-1.748c.938 0 1.656-.787 1.656-1.749 0-.961-.745-1.748-1.657-1.748V8.808c1.823 0 3.315 1.574 3.315 3.497z'
				fill={color}
			/>
		</svg>
	),
);

SoundIcon.displayName = 'SoundIcon';
