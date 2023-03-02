import * as React from "react";
import { SVGAttributes } from "react";

export const NextPlayerIcon = React.memo(
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
          d="M14.026 5.197a.977.977 0 010 1.704l-8.112 4.566a.977.977 0 01-1.457-.851V1.483A.977.977 0 015.914.63l8.112 4.566z"
          fill="#EFEFEF"
        />
        <g filter="url(#next-player_svg__a)">
          <path
            d="M10.092 5.197a.977.977 0 010 1.704L1.98 11.467a.977.977 0 01-1.457-.851V1.483A.977.977 0 011.98.63l8.112 4.566z"
            fill="#EFEFEF"
          />
        </g>
        <defs>
          <filter
            id="next-player_svg__a"
            x={0.523}
            y={0.504}
            width={15.573}
            height={15.81}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={3.933} dy={3.147} />
            <feGaussianBlur stdDeviation={0.787} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_401_286"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_401_286"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
);

NextPlayerIcon.displayName = "NextPlayerIcon";
