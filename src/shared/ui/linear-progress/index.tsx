import React from 'react';
import cls from './styles.module.scss';

const Component = () => {
    return (
        <progress className={cls.pure_material_progress_linear} />
    );
};

export const LinearProgress = React.memo(Component);
