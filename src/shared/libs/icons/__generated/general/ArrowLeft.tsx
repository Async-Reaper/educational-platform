import * as React from "react";
import { SVGAttributes } from "react";

export const ArrowLeftIcon = React.memo(
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
          d="M9.064 2.053a1 1 0 01.083 1.412L6.004 7.001l3.143 3.535a1 1 0 01-1.495 1.33l-3.733-4.2a1 1 0 010-1.33l3.733-4.2a1 1 0 011.412-.083z"
          fill="#74758D"
        />
      </svg>
    );
  }
);

ArrowLeftIcon.displayName = "ArrowLeftIcon";
