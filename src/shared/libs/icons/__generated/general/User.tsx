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
          d="M14 38.587c10.235-4.58 15.966-4.573 26 0M52 26.5C52 40.031 40.807 51 27 51S2 40.031 2 26.5 13.193 2 27 2s25 10.969 25 24.5zm-16-4.573c0 4.87-4.03 8.82-9 8.82s-9-3.95-9-8.82c0-4.872 4.03-8.82 9-8.82s9 3.948 9 8.82z"
          stroke={color}
          strokeWidth={2.931}
        />
      </svg>
    );
  }
);
