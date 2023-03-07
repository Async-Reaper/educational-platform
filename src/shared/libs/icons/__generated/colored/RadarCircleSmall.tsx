import * as React from "react";
import { SVGAttributes } from "react";

export const RadarCircleSmallIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <circle
          cx={69.5}
          cy={69.5}
          r={68.789}
          stroke="url(#radar-circle-small_svg__a)"
          strokeWidth={1.423}
        />
        <defs>
          <linearGradient
            id="radar-circle-small_svg__a"
            x1={139}
            y1={69.726}
            x2={-17.5}
            y2={69.726}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7928CB" />
            <stop offset={1} stopColor="#CFB4EA" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
