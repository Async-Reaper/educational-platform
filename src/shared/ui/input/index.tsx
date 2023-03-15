import React, { InputHTMLAttributes, memo, ReactNode, useRef } from "react";
import { classNames } from "shared/libs/helpers/classNames";
import cls from "./styles.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">;

interface Props extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: Props) => {
  const { className = "", value, onChange, type = "text", placeholder, label, autofocus, readonly, ...otherProps } = props;
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className={classNames(cls.input_wrapper, [className])}>
      {label && <div className={cls.label}>{label}</div>}
      <input ref={ref} type={type} value={value} onChange={onChange} placeholder={placeholder} className={cls.input} readOnly={readonly} {...otherProps} />
    </div>
  );
});
