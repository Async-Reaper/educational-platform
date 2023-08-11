import * as React from "react";
import { SVGAttributes } from "react";

export const ArrowRightIcon = React.memo(
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
          d="M21.424 12.424a.6.6 0 000-.848l-3.818-3.819a.6.6 0 10-.849.849L20.151 12l-3.394 3.394a.6.6 0 10.849.849l3.818-3.819zM2 12.6h19v-1.2H2v1.2z"
          fill={color}
        />
      </svg>
    );
  }
);
