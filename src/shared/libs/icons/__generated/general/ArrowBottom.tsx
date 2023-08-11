import * as React from "react";
import { SVGAttributes } from "react";

export const ArrowBottomIcon = React.memo(
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
          d="M13 4a1 1 0 10-2 0h2zm-1.707 17.707a1 1 0 001.414 0l6.364-6.364a1 1 0 00-1.414-1.414L12 19.586l-5.657-5.657a1 1 0 00-1.414 1.414l6.364 6.364zM11 4v17h2V4h-2z"
          fill={color}
        />
      </svg>
    );
  }
);
