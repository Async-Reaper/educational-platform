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
          d="M16 28.76h9.84c3.4 0 6.16-2.76 6.16-6.16 0-3.4-2.76-6.16-6.16-6.16H12.3m2.84 3.1L12 16.38l3.14-3.14M16 42h12c10 0 14-4 14-14V16C42 6 38 2 28 2H16C6 2 2 6 2 16v12c0 10 4 14 14 14z"
          stroke={color}
          strokeWidth={2.93}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
