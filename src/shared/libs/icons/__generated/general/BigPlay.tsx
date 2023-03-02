import * as React from "react";
import { SVGAttributes } from "react";

export const BigPlayIcon = React.memo(
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
          d="M45.5 24.902c2 1.155 2 4.041 0 5.196L5.75 53.048c-2 1.154-4.5-.289-4.5-2.598V4.55c0-2.31 2.5-3.752 4.5-2.598l39.75 22.95z"
          stroke="url(#big-play_svg__a)"
          strokeWidth={2}
        />
        <defs>
          <linearGradient
            id="big-play_svg__a"
            x1={52}
            y1={28}
            x2={-26}
            y2={28}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B152FC" />
            <stop offset={1} stopColor="#B152FC" stopOpacity={0.61} />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

BigPlayIcon.displayName = "BigPlayIcon";
