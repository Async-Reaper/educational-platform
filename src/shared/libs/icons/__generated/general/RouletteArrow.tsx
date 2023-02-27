import * as React from "react";
import { SVGAttributes } from "react";

export const RouletteArrowIcon = React.memo(
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
          d="M10.377 5.914c.721-1.219 2.525-1.219 3.246 0l6.124 10.347c.72 1.218-.181 2.739-1.623 2.739H5.876c-1.442 0-2.343-1.521-1.623-2.739l6.124-10.347z"
          fill={color}
        />
      </svg>
    );
  }
);

RouletteArrowIcon.displayName = "RouletteArrowIcon";
