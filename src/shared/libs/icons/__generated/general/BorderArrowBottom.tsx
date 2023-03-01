import * as React from "react";
import { SVGAttributes } from "react";

export const BorderArrowBottomIcon = React.memo(
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
          d="M1 49.844V41.5C1 19.133 19.133 1 41.5 1S82 19.133 82 41.5v8.349"
          stroke="#9566C5"
          strokeWidth={2}
        />
      </svg>
    );
  }
);

BorderArrowBottomIcon.displayName = "BorderArrowBottomIcon";
