import * as React from "react";
import { SVGAttributes } from "react";

export const TestArrowRightIcon = React.memo(
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
          d="M43.91 10.455H7.138l6.885-6.886A2.09 2.09 0 1011.067.612L.612 11.067a2.09 2.09 0 000 2.957l10.455 10.454c.408.409.943.613 1.479.613a2.09 2.09 0 001.478-3.57l-6.885-6.885h36.77a2.091 2.091 0 000-4.181z"
          fill="url(#test-arrow-right_svg__a)"
        />
        <defs>
          <linearGradient
            id="test-arrow-right_svg__a"
            x1={0}
            y1={13}
            x2={37}
            y2={13}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8852FC" />
            <stop offset={1} stopColor="#8852FC" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

TestArrowRightIcon.displayName = "TestArrowRightIcon";
