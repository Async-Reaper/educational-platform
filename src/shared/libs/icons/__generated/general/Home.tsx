import * as React from "react";
import { SVGAttributes } from "react";

export const HomeIcon = React.memo(
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
          d="M15.333 42V28.667a4.444 4.444 0 014.445-4.445h4.444a4.444 4.444 0 014.445 4.445V42M6.444 22H2L22 2l20 20h-4.444v15.556A4.445 4.445 0 0133.11 42H10.89a4.445 4.445 0 01-4.445-4.444V22z"
          stroke={color}
          strokeWidth={2.93}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
