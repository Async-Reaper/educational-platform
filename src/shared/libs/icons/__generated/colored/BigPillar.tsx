import * as React from "react";
import { SVGAttributes } from "react";

export const BigPillarIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <g opacity={0.4}>
          <path
            d="M160.756 38.403V0l33.259 19.2v147.212l-33.259 19.197V38.402z"
            fill="url(#big-pillar_svg__a)"
          />
          <path
            d="M160.759 0L127.5 19.2v147.212l33.259 19.198V0z"
            fill="url(#big-pillar_svg__b)"
          />
          <path
            fill="#E6E6E6"
            d="M127.497 19.2L160.755 0l33.258 19.2-33.258 19.2z"
          />
        </g>
        <defs>
          <linearGradient
            id="big-pillar_svg__a"
            x1={170.912}
            y1={22.71}
            x2={113.3}
            y2={122.48}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C7C4C4" />
            <stop offset={1} stopColor="#C7C4C4" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="big-pillar_svg__b"
            x1={143.948}
            y1={25.829}
            x2={143.948}
            y2={181.153}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E1DEDE" />
            <stop offset={1} stopColor="#E1DEDE" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
