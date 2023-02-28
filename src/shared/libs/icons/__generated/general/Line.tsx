import * as React from "react";
import { SVGAttributes } from "react";

export const LineIcon = React.memo(
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
          width={49.219}
          height={3.938}
          x={0.781}
          y={0.836}
          fill="#fff"
          rx={1.969}
        />
      </svg>
    );
  }
);

LineIcon.displayName = "LineIcon";
