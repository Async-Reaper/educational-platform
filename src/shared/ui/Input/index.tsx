import React, {
   InputHTMLAttributes, memo, ReactNode, useRef,
} from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface Props extends HTMLInputProps {
   className?: string;
   value?: string | number;
   label?: ReactNode;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   readonly?: boolean;
   pattern?: any;
   max?: number
   min?: number;
}

export const Input = memo((props: Props) => {
   const {
      className = '',
      value,
      onChange,
      type = 'text',
      placeholder,
      label,
      readonly,
      pattern,
      max,
      min,
      ...otherProps
   } = props;
   const ref = useRef<HTMLInputElement>(null);

   return (
      <div className={classNames(cls.input_wrapper, [className])}>
         {label && <div className={cls.label}>{label}</div>}
         <input
            className={cls.input}
            pattern={pattern}
            ref={ref}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readonly}
            maxLength={max}
            minLength={min}
            {...otherProps}
         />
      </div>
   );
});
