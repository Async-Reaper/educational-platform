import * as React from "react";
import { SVGAttributes } from "react";

export const PlusIcon = React.memo(
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
          d="M10.833 6.553a1.167 1.167 0 012.334 0V18.22a1.167 1.167 0 01-2.334 0V6.553z"
          fill={color}
        />
        <path
          d="M17.833 11.22a1.167 1.167 0 110 2.333H6.167a1.167 1.167 0 110-2.333h11.666z"
          fill={color}
        />
      </svg>
    );
  }
);

PlusIcon.displayName = "PlusIcon";
