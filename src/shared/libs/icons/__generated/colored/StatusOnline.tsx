import * as React from "react";
import { SVGAttributes } from "react";

export const StatusOnlineIcon = React.memo(
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
          x={1}
          y={1}
          width={14}
          height={14}
          rx={7}
          fill="#2FA84F"
          stroke="#fff"
          strokeWidth={2}
        />
      </svg>
    );
  }
);
