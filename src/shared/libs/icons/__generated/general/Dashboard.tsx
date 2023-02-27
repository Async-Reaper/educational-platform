import * as React from "react";
import { SVGAttributes } from "react";

export const DashboardIcon = React.memo(
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
          x={2.079}
          y={2.039}
          width={8.486}
          height={8.486}
          rx={1}
          fill={color}
        />
        <rect
          x={13.604}
          y={2.039}
          width={8.486}
          height={8.486}
          rx={1}
          fill={color}
        />
        <rect
          x={2.079}
          y={13.563}
          width={8.486}
          height={8.486}
          rx={1}
          fill={color}
        />
        <rect
          x={13.604}
          y={13.563}
          width={8.486}
          height={8.486}
          rx={1}
          fill={color}
        />
      </svg>
    );
  }
);

DashboardIcon.displayName = "DashboardIcon";
