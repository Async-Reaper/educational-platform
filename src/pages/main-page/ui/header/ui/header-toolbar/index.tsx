import React, {ReactNode} from 'react';
import cls from './styles.module.scss';
import {classNames} from "shared/libs/helpers/classNames";
import {Typography} from "shared/ui";

interface Props {
    children: ReactNode
    isVisible: boolean;
}

const Component: React.FC<Props> = ({children, isVisible}) => {
    return (
        <div className={classNames(cls.header_toolbar, [], { [cls.active]:isVisible })}>
            <div className={cls.toolbar__bottom}>
                <Typography tag={"span"} variant={"small"}>{children}</Typography>
            </div>
        </div>
    );
};

export const HeaderToolbar = React.memo(Component);
