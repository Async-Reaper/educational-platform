import * as React from "react";
import { SVGAttributes } from "react";

export const MinusIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <rect
          x={18}
          y={11}
          width={2}
          height={12}
          rx={1}
          transform="rotate(90 18 11)"
          fill={color}
        />
      </svg>
    );
  }
);
