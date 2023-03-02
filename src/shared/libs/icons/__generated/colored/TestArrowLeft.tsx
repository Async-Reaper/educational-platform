import * as React from "react";
import { SVGAttributes } from "react";

export const TestArrowLeftIcon = React.memo(
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
          d="M34.933 1.522a2.091 2.091 0 00-2.957 2.956l6.885 6.886H2.091a2.09 2.09 0 000 4.181h36.77l-6.885 6.886a2.091 2.091 0 002.957 2.956l10.455-10.454a2.09 2.09 0 000-2.957L34.933 1.521z"
          fill="url(#test-arrow-left_svg__a)"
        />
        <defs>
          <linearGradient
            id="test-arrow-left_svg__a"
            x1={46}
            y1={14.5}
            x2={5.5}
            y2={14.5}
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

TestArrowLeftIcon.displayName = "TestArrowLeftIcon";
