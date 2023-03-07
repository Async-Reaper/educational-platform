import * as React from "react";
import { SVGAttributes } from "react";

export const BorderTestIcon = React.memo(
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
          opacity={0.1}
          x={1.565}
          y={1.565}
          width={760.87}
          height={455.87}
          rx={34.179}
          stroke="#A752FC"
          strokeWidth={3.13}
        />
      </svg>
    );
  }
);
