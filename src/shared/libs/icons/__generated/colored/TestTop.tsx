import * as React from "react";
import { SVGAttributes } from "react";

export const TestTopIcon = React.memo(
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
          opacity={0.2}
          d="M35.5 25h15.072c6.937 0 12.56 7.835 12.56 17.5S68.756 60 75.692 60h44.499M199.5 25h-15.072c-6.937 0-12.56 7.835-12.56 17.5S166.244 60 159.307 60h-44.498"
          stroke="url(#test-top_svg__a)"
          strokeWidth={2}
        />
        <path
          opacity={0.5}
          d="M23.5 14h17.002c7.825 0 14.169 7.835 14.169 17.5S61.014 49 68.839 49h50.197M208.5 14h-17.002c-7.825 0-14.169 7.835-14.169 17.5S170.986 49 163.161 49h-50.197"
          stroke="url(#test-top_svg__b)"
          strokeWidth={2}
        />
        <path
          d="M0 2h21c9.665 0 17.5 7.835 17.5 17.5S46.335 37 56 37h62M228.5 2h-21C197.835 2 190 9.835 190 19.5S182.165 37 172.5 37h-62"
          stroke="url(#test-top_svg__c)"
          strokeWidth={3}
        />
        <defs>
          <linearGradient
            id="test-top_svg__a"
            x1={201.294}
            y1={25}
            x2={38.73}
            y2={25}
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop stopColor="#8852FC" stopOpacity={0} />
            <stop offset={0.481} stopColor="#8852FC" />
            <stop offset={1} stopColor="#8852FC" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="test-top_svg__b"
            x1={210.524}
            y1={14}
            x2={27.143}
            y2={14}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8852FC" />
            <stop stopColor="#FC6652" stopOpacity={0} />
            <stop offset={0} />
            <stop offset={0.481} stopColor="#8852FC" />
            <stop offset={1} stopColor="#8852FC" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="test-top_svg__c"
            x1={231}
            y1={2}
            x2={4.5}
            y2={2}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8852FC" stopOpacity={0} />
            <stop offset={0.169} stopColor="#8852FC" stopOpacity={0.704} />
            <stop offset={0.481} stopColor="#8852FC" />
            <stop offset={0.824} stopColor="#8852FC" stopOpacity={0.73} />
            <stop offset={1} stopColor="#8852FC" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
