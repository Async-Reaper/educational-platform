import * as React from "react";
import { SVGAttributes } from "react";

export const TestBottomIcon = React.memo(
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
          d="M0 59h21c9.665 0 17.5-7.835 17.5-17.5S46.335 24 56 24h62m110.5 35h-21c-9.665 0-17.5-7.835-17.5-17.5S182.165 24 172.5 24h-62"
          stroke="url(#test-bottom_svg__a)"
          strokeWidth={3}
        />
        <path
          opacity={0.5}
          d="M23.5 47h17.002c7.825 0 14.169-7.835 14.169-17.5S61.014 12 68.839 12h50.197M208.5 47h-17.002c-7.825 0-14.169-7.835-14.169-17.5S170.986 12 163.161 12h-50.197"
          stroke="url(#test-bottom_svg__b)"
          strokeWidth={2}
        />
        <path
          opacity={0.2}
          d="M35.5 36h15.072c6.937 0 12.56-7.835 12.56-17.5S68.756 1 75.692 1h44.499M199.5 36h-15.072c-6.937 0-12.56-7.835-12.56-17.5S166.244 1 159.307 1h-44.498"
          stroke="url(#test-bottom_svg__c)"
          strokeWidth={2}
        />
        <defs>
          <linearGradient
            id="test-bottom_svg__a"
            x1={231}
            y1={59}
            x2={4.5}
            y2={59}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8852FC" stopOpacity={0} />
            <stop offset={0.169} stopColor="#8852FC" stopOpacity={0.704} />
            <stop offset={0.481} stopColor="#8852FC" />
            <stop offset={0.824} stopColor="#8852FC" stopOpacity={0.73} />
            <stop offset={1} stopColor="#8852FC" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="test-bottom_svg__b"
            x1={210.524}
            y1={47}
            x2={27.143}
            y2={47}
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop stopColor="#8852FC" stopOpacity={0} />
            <stop offset={0.481} stopColor="#8852FC" />
            <stop offset={1} stopColor="#8852FC" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="test-bottom_svg__c"
            x1={201.294}
            y1={36}
            x2={38.73}
            y2={36}
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop stopColor="#8852FC" stopOpacity={0} />
            <stop offset={0.481} stopColor="#8852FC" stopOpacity={0.985} />
            <stop offset={0.481} stopColor="#8852FC" />
            <stop offset={1} stopColor="#8852FC" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

TestBottomIcon.displayName = "TestBottomIcon";
