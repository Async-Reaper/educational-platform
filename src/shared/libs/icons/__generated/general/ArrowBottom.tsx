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
          fill="#494947"
          d="M9 1a1 1 0 00-2 0h2zM7.293 21.707a1 1 0 001.414 0l6.364-6.364a1 1 0 00-1.414-1.414L8 19.586l-5.657-5.657A1 1 0 00.93 15.343l6.364 6.364zM7 1v20h2V1H7z"
        />
      </svg>
    );
  }
);
