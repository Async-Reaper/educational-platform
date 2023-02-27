import { classNames } from "shared/libs/helpers/classNames";
import React, { FC } from "react";
import cls from "./styles.module.scss";

type Props = {
  src: string;
  name: string;
  className?: string;
};

const Component: FC<Props> = (props) => {
  const { className = "", src, name, ...otherProps } = props;

  return <img src={src} alt={name} className={classNames(cls.Image, [className])} {...otherProps} />;
};

export const Image = React.memo(Component);
