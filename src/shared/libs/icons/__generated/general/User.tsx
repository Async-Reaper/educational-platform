import * as React from "react";
import { SVGAttributes } from "react";

export const UserIcon = React.memo(
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
          d="M11.6 31.867c8.188-3.739 12.773-3.733 20.8 0M42 22c0 11.046-8.954 20-20 20S2 33.046 2 22 10.954 2 22 2s20 8.954 20 20zm-12.8-3.733a7.2 7.2 0 11-14.4 0 7.2 7.2 0 0114.4 0z"
          stroke={color}
          strokeWidth={2.931}
        />
      </svg>
    );
  }
);
