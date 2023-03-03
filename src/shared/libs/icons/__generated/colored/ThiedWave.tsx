import * as React from "react";
import { SVGAttributes } from "react";

export const ThiedWaveIcon = React.memo(
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
          d="M2408 311.905c-78.83 39.13-500.36 80.798-676.88 40.439-220.66-50.449-545.99-168.769-820.75-149.633C635.608 221.847 112.026 502.462 0 550V0h2408v311.905z"
          fill="url(#thied-wave_svg__a)"
        />
        <defs>
          <linearGradient
            id="thied-wave_svg__a"
            x1={1204}
            y1={492.877}
            x2={1204}
            y2={94.026}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C78EFF" stopOpacity={0.21} />
            <stop offset={1} stopColor="#D898FF" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

ThiedWaveIcon.displayName = "ThiedWaveIcon";
