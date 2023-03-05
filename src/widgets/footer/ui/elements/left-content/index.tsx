import React from 'react';
import { Typography } from 'shared/ui';

const Component = () => (
    <>
        <Typography variant='body' color='white-bg'>
            Ссылка на сайт
        </Typography>
        <Typography variant='body' color='white-bg'>
            Copyright 2020 Q solutions
        </Typography>
    </>
);

export const LeftContent = React.memo(Component);
