import * as React from "react";
import { SVGAttributes } from "react";

export const LinePlayerIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <rect width={659} height={4} rx={2} fill="#EFEFEF" />
      </svg>
    );
  }
);

LinePlayerIcon.displayName = "LinePlayerIcon";
