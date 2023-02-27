import * as React from "react";
import { SVGAttributes } from "react";

export const ArrowBottomIcon = React.memo(
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
          d="M17.648 12.125c-.47-.567-1.227-.567-1.697 0L13.2 15.45v-11c0-.8-.536-1.45-1.2-1.45-.664 0-1.2.65-1.2 1.45v11l-2.75-3.325c-.47-.567-1.228-.567-1.697 0-.47.567-.47 1.483 0 2.05L12 21l5.648-6.825c.47-.567.47-1.483 0-2.05z"
          fill={color}
        />
      </svg>
    );
  }
);

ArrowBottomIcon.displayName = "ArrowBottomIcon";
