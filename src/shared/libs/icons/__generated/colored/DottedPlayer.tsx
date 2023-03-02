import * as React from "react";
import { SVGAttributes } from "react";

export const DottedPlayerIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <circle cx={8.5} cy={8.5} r={8.5} fill="#A752FC" />
        <circle cx={8.5} cy={8.5} r={8.5} fill="url(#dotted-player_svg__a)" />
        <defs>
          <linearGradient
            id="dotted-player_svg__a"
            x1={8.5}
            y1={0}
            x2={8.5}
            y2={17}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#772DD7" />
            <stop offset={1} stopColor="#B251FE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

DottedPlayerIcon.displayName = "DottedPlayerIcon";
