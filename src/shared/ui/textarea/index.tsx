import React, { memo, ReactNode } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

interface Props {
  placeholder: string;
  className?: string;
  value?: string | number;
  label?: ReactNode
  onChange?: (arg: any) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const TextArea = memo((props: Props) => {
  const {
    className = '',
    value,
    onChange,
    placeholder,
    label,
    autofocus,
    readonly,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  return (
     <div className={classNames(cls.textarea_wrapper, [className])}>
        {label && (
        <div className={cls.label}>
           {label}
        </div>
        )}
        <textarea
          value={value}
          onChange={onChangeHandler}
          placeholder={placeholder}
          className={cls.textarea}
          {...otherProps}
        />
     </div>
  );
});
