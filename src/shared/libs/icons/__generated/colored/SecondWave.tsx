import * as React from "react";
import { SVGAttributes } from "react";

export const SecondWaveIcon = React.memo(
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
          d="M2065 311.977c-67.6 39.139-429.08 80.817-580.47 40.448-189.22-50.46-468.21-168.807-703.835-149.667C545.071 221.899 96.069 502.578 0 550.127V0h2065v311.977z"
          fill="url(#second-wave_svg__a)"
        />
        <defs>
          <linearGradient
            id="second-wave_svg__a"
            x1={1032.5}
            y1={492.991}
            x2={1032.5}
            y2={94.047}
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

SecondWaveIcon.displayName = "SecondWaveIcon";
