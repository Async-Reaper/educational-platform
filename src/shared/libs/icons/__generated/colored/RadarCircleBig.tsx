import * as React from "react";
import { SVGAttributes } from "react";

export const RadarCircleBigIcon = React.memo(
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
          cx={112}
          cy={112}
          r={111.75}
          stroke="url(#radar-circle-big_svg__a)"
          strokeWidth={0.5}
        />
        <defs>
          <linearGradient
            id="radar-circle-big_svg__a"
            x1={224}
            y1={112.365}
            x2={-28.201}
            y2={112.365}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7928CB" stopOpacity={0.51} />
            <stop offset={0.526} stopColor="#7928CB" stopOpacity={0} />
            <stop offset={1} stopColor="#7928CB" stopOpacity={0.52} />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

RadarCircleBigIcon.displayName = "RadarCircleBigIcon";
