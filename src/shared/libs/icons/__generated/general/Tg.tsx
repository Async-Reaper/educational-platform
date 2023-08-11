import * as React from "react";
import { SVGAttributes } from "react";

export const TgIcon = React.memo(
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
          d="M20.292 5.383A1.075 1.075 0 0019.439 5c-.189 0-.389.04-.595.118L4.838 10.465c-.743.284-.843.71-.837.938.007.229.13.648.89.89.004 0 .008.002.013.004l1.964.562 9.567-4.888a.485.485 0 01.573.764l-5.319 5.652-.151.615 1.9 1.53 2.632 2.12c.002 0 .004.003.006.005.29.224.606.343.915.343.604 0 1.085-.447 1.225-1.138L20.51 6.529c.092-.454.014-.861-.218-1.146z"
          fill={color}
        />
        <path
          d="M10.777 14.031a.483.483 0 01.117-.216l3.49-3.709-6.476 3.31 1.47 4.205c.084.24.209.444.363.603l1.036-4.193zm-.132 4.584c.35-.003.693-.15.994-.427l1.076-.991-1.435-1.155-.635 2.573z"
          fill={color}
        />
      </svg>
    );
  }
);
