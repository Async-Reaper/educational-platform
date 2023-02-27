import * as React from "react";
import { SVGAttributes } from "react";

export const ExchangeIcon = React.memo(
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
          d="M17.928 17l-4.962 2.511a2 2 0 01-1.903-.052l-4.991-2.882a2 2 0 01-1-1.732V12m1-5l4.962-2.511a2 2 0 011.903.052l4.991 2.882a2 2 0 011 1.732V12"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <path
          d="M3 13l2.286-2L7 13m14-2l-2.286 2L17 11m-7 1.615L11.516 14 14 11"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ExchangeIcon.displayName = "ExchangeIcon";
