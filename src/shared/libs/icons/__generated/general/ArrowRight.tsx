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
          fill="#fff"
          d="M25.424 5.424a.6.6 0 000-.848L21.606.757a.6.6 0 10-.849.849L24.151 5l-3.394 3.394a.6.6 0 10.849.849l3.818-3.819zM0 5.6h25V4.4H0v1.2z"
        />
      </svg>
    );
  }
);
