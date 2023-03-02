import * as React from "react";
import { SVGAttributes } from "react";

export const WaveIcon = React.memo(
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
          d="M0 235.498c66.851-38.704 424.305-79.917 574-39.998 187.119 49.898 463 166.927 696 148C1503 324.573 1947 47.02 2042 0v731H0V235.498z"
          fill="url(#wave_svg__a)"
        />
        <defs>
          <linearGradient
            id="wave_svg__a"
            x1={1021}
            y1={243.5}
            x2={1021}
            y2={638}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9B53C8" stopOpacity={0.21} />
            <stop offset={1} stopColor="#9B53C8" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

WaveIcon.displayName = "WaveIcon";
