import * as React from "react";
import { SVGAttributes } from "react";

export const LockIcon = React.memo(
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
          d="M3.637 18.101a2.39 2.39 0 002.39 2.39h11.946a2.39 2.39 0 002.39-2.39v-5.973a2.39 2.39 0 00-2.39-2.39h-.597V6.753a5.376 5.376 0 00-10.752 0V9.74h-.597a2.39 2.39 0 00-2.39 2.389v5.973zM12 16.907a1.792 1.792 0 110-3.584 1.792 1.792 0 010 3.584zM9.61 6.752a2.39 2.39 0 114.78 0V9.74H9.61V6.752z"
          fill={color}
        />
      </svg>
    );
  }
);

LockIcon.displayName = "LockIcon";
