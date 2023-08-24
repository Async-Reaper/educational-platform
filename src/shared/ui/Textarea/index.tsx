import React, { memo, ReactNode } from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

interface Props {
   placeholder: string;
   className?: string;
   value?: string | number;
   label?: ReactNode
   onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
   autofocus?: boolean;
}

export const TextArea = memo((props: Props) => {
   const {
      className = '',
      value,
      onChange,
      placeholder,
      label,
      autofocus,
      ...otherProps
   } = props;

   return (
      <div className={classNames(cls.textarea_wrapper, [className])}>
         {label && (
            <div className={cls.label}>
               {label}
            </div>
         )}
         <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={cls.textarea}
            autoFocus={autofocus}
            {...otherProps}
         />
      </div>
   );
});
