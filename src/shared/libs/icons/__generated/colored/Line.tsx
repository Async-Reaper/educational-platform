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
        <rect width={64} height={4} rx={2} fill="#9B53C8" />
      </svg>
    );
  }
);
