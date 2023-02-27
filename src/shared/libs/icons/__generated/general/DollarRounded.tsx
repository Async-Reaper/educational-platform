import * as React from "react";
import { SVGAttributes } from "react";

export const DollarRoundedIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm.729-14.364c.852.108 1.572.42 2.232.876l-.804 1.404c-.48-.324-.996-.576-1.488-.708v1.824c1.824.492 2.604 1.224 2.604 2.568v.024c0 1.344-1.032 2.208-2.544 2.364v1.188H9.481v-1.212a6.029 6.029 0 01-2.832-1.14l.936-1.368c.648.492 1.248.828 1.956.972V10.52c-1.728-.468-2.58-1.116-2.58-2.544v-.024c0-1.32 1.008-2.196 2.52-2.352v-.696h1.248v.732zm.792 6.084v-.024c0-.396-.204-.648-.852-.888v1.68c.564-.084.852-.336.852-.768zM8.713 7.844v.024c0 .384.168.624.828.864V7.1c-.588.072-.828.36-.828.744z"
          fill={color}
        />
      </svg>
    );
  }
);

DollarRoundedIcon.displayName = "DollarRoundedIcon";
