import React from 'react';
import DynamicComponent from 'shared/ui/typography/DynamicComponent';
import { themeColor } from 'shared/ui/theme';

export type Variant =
    | 'canon'
    | 'trafalgar'
    | 'paragon'
    | 'doublePica'
    | 'default';

const variantsTypography = {
  canon: {
    tag: 'h1',
    fontSize: ['40px'],
    fontWeight: 700,
    lineHeight: ['48px'],
  },
  trafalgar: {
    tag: 'h2',
    fontSize: ['32px'],
    fontWeight: 700,
    lineHeight: ['42px'],
  },
  paragon: {
    tag: 'h3',
    fontSize: ['24px'],
    fontWeight: 500,
    lineHeight: ['32px'],
  },
  doublePica: {
    tag: 'p',
    fontSize: ['18px'],
    fontWeight: 400,
    lineHeight: ['24px'],
  },
  default: {
    tag: 'span',
    fontSize: ['14px'],
    fontWeight: 300,
    lineHeight: ['16px'],
  },
};

interface Props {
  children: React.ReactNode;
  color: themeColor;
  variant: Variant;
}

const Typography: React.FC<Props> = ({ variant = 'default', ...props }) => (
   <DynamicComponent {...variantsTypography[variant]} {...props}>
      {props.children}
   </DynamicComponent>
);

export default Typography;
