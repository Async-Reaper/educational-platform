import * as React from "react";
import { SVGAttributes } from "react";

export const HomeIcon = React.memo(
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
          d="M6.333 17v-5.333a1.778 1.778 0 011.778-1.778H9.89a1.779 1.779 0 011.778 1.778V17m-8.89-8H1l8-8 8 8h-1.778v6.222A1.779 1.779 0 0113.444 17H4.556a1.778 1.778 0 01-1.778-1.778V9h0z"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
