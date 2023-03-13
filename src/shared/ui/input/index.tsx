import React, {
  InputHTMLAttributes, memo, ReactNode, useRef,
} from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface Props extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: ReactNode
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: Props) => {
  const {
    className = '',
    value,
    onChange,
    type = 'text',
    placeholder,
    label,
    autofocus,
    readonly,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
     <div className={classNames(cls.input_wrapper, [className])}>
        {label && (
          <div className={cls.label}>
             {label}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          placeholder={placeholder}
          className={cls.input}
          readOnly={readonly}
          {...otherProps}
        />
     </div>
  );
});
