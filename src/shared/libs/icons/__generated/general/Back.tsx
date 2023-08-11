import * as React from "react";
import { SVGAttributes } from "react";

export const BackIcon = React.memo(
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
          d="M6.6 11.704h3.936a2.465 2.465 0 000-4.928H5.12m1.136 1.24L5 6.752l1.256-1.256M6.6 17h4.8c4 0 5.6-1.6 5.6-5.6V6.6c0-4-1.6-5.6-5.6-5.6H6.6C2.6 1 1 2.6 1 6.6v4.8c0 4 1.6 5.6 5.6 5.6z"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
