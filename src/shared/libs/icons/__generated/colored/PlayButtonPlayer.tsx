import * as React from "react";
import { SVGAttributes } from "react";

export const PlayButtonPlayerIcon = React.memo(
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
          d="M13.805 6.771a1.41 1.41 0 010 2.458L2.1 15.817A1.41 1.41 0 010 14.588V1.412A1.41 1.41 0 012.101.183l11.704 6.588z"
          fill="#FF715B"
        />
        <path
          d="M13.805 6.771a1.41 1.41 0 010 2.458L2.1 15.817A1.41 1.41 0 010 14.588V1.412A1.41 1.41 0 012.101.183l11.704 6.588z"
          fill="url(#play-button-player_svg__a)"
        />
        <defs>
          <linearGradient
            id="play-button-player_svg__a"
            x1={7.262}
            y1={0}
            x2={7.262}
            y2={16}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8C2DD7" />
            <stop offset={1} stopColor="#A851FE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
