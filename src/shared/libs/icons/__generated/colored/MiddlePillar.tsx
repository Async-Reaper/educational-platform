import * as React from "react";
import { SVGAttributes } from "react";

export const MiddlePillarIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <g opacity={0.2}>
          <path
            d="M149.497 35.712L149.498 0l30.928 17.855v136.902l-30.929 17.853V35.712z"
            fill="url(#middle-pillar_svg__a)"
          />
          <path
            d="M149.499 0L118.57 17.855v136.902l30.929 17.853V0z"
            fill="url(#middle-pillar_svg__b)"
          />
          <path
            fill="#E6E6E6"
            d="M118.567 17.855L149.496 0l30.93 17.855-30.93 17.856z"
          />
        </g>
        <defs>
          <linearGradient
            id="middle-pillar_svg__a"
            x1={158.942}
            y1={21.118}
            x2={105.364}
            y2={113.901}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C7C4C4" />
            <stop offset={1} stopColor="#C7C4C4" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="middle-pillar_svg__b"
            x1={133.866}
            y1={24.02}
            x2={133.866}
            y2={168.465}
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
