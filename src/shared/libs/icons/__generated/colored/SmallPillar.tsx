import * as React from "react";
import { SVGAttributes } from "react";

export const SmallPillarIcon = React.memo(
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
            d="M122.822 29.34V0l25.41 14.67v112.473l-25.41 14.667V29.34z"
            fill="url(#small-pillar_svg__a)"
          />
          <path
            d="M122.824 0l-25.41 14.67v112.473l25.41 14.667V0z"
            fill="url(#small-pillar_svg__b)"
          />
          <path
            fill="#E6E6E6"
            d="M97.41 14.67L122.82 0l25.41 14.67-25.41 14.668z"
          />
        </g>
        <defs>
          <linearGradient
            id="small-pillar_svg__a"
            x1={130.581}
            y1={17.35}
            x2={86.564}
            y2={93.578}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C7C4C4" />
            <stop offset={1} stopColor="#C7C4C4" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="small-pillar_svg__b"
            x1={109.98}
            y1={19.734}
            x2={109.98}
            y2={138.405}
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
