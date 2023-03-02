import * as React from "react";
import { SVGAttributes } from "react";

export const FullScreenIcon = React.memo(
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
          d="M22 13.688v.968a2.577 2.577 0 01-2.577 2.577H16.75M22 4.937v-1.36A2.577 2.577 0 0019.423 1H16.75M6.25 1H3.577A2.577 2.577 0 001 3.577v1.481m5.25 12.175H3.577A2.577 2.577 0 011 14.656v-1.481"
          stroke="#EFEFEF"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

FullScreenIcon.displayName = "FullScreenIcon";
