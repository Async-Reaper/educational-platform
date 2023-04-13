import * as React from "react";
import { SVGAttributes } from "react";

export const PlayIcon = React.memo(
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
          d="M16.174 8.46a1.086 1.086 0 010 1.882L2.33 18.335a1.086 1.086 0 01-1.63-.94V1.407C.7.572 1.607.05 2.33.468L16.174 8.46z"
          fill={color}
        />
      </svg>
    );
  }
);
