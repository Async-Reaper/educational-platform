import * as React from "react";
import { SVGAttributes } from "react";

export const MessageIcon = React.memo(
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
          d="M.5 5a5 5 0 015-5h40a5 5 0 015 5v30a5 5 0 01-5 5h-40a5 5 0 01-5-5V5zM6 2.5L25.5 22 45 2.5H6zm41.5.5L27.148 24.383a2.5 2.5 0 01-3.296 0L3.5 3v34h44V3z"
          fill={color}
        />
      </svg>
    );
  }
);
