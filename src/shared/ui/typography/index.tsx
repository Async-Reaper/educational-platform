import React, { type FC, ReactNode } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

type Tag = 'h1' | 'h2' | 'h3' | 'span' | 'strong';

type Variant = 'h1' | 'h2' | 'h3' | 'body' | 'small';

type Props = {
  color?: Colors;
  tag?: Tag;
  variant?: Variant;
  children: ReactNode;
  inline?: boolean;
  noWrap?: boolean;
  uppercase?: boolean;
};

const Component: FC<Props> = (props) => {
  const {
    tag = 'div',
    variant = 'body',
    color = 'inherit',
    children,
    noWrap = false,
    inline = false,
    uppercase = false,
    ...otherProps
  } = props;

  const ComponentUi = tag;

  return (
     <ComponentUi
       className={
        classNames(
          cls.text,
          [cls[`variant--${variant}`], cls[`color--${color}`], cls[`tag--${tag}`]],
          { [cls.uppercase]: uppercase, [cls.noWrap]: noWrap, [cls.inline]: inline },
        )
     }
       {...otherProps}
     >
        {children}
     </ComponentUi>
  );
};

export const Typography = React.memo(Component);
