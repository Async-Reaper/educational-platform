import * as React from "react";
import { SVGAttributes } from "react";

export const CheckRoundedIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <circle cx={12} cy={12} r={11} stroke={color} strokeWidth={2} />
        <path
          d="M8 12.77L10.526 16 16 9"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

CheckRoundedIcon.displayName = "CheckRoundedIcon";
