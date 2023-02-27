import * as React from "react";
import { SVGAttributes } from "react";

export const AllIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <rect x={3} y={3} width={8} height={8} rx={4} fill={color} />
        <rect x={3} y={13} width={8} height={8} rx={1} fill={color} />
        <rect x={13} y={3} width={8} height={8} rx={1} fill={color} />
        <rect x={14} y={14} width={6} height={6} rx={1} fill={color} />
      </svg>
    );
  }
);

AllIcon.displayName = "AllIcon";
