import * as React from "react";
import { SVGAttributes } from "react";

export const BackPlayerIcon = React.memo(
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
          d="M.498 5.197a.977.977 0 000 1.704l8.112 4.566a.977.977 0 001.457-.851V1.483A.977.977 0 008.61.63L.498 5.197z"
          fill="#EFEFEF"
        />
        <g filter="url(#back-player_svg__a)">
          <path
            d="M4.431 5.197a.977.977 0 000 1.704l8.113 4.566A.977.977 0 0014 10.616V1.483A.977.977 0 0012.544.63L4.43 5.197z"
            fill="#EFEFEF"
          />
        </g>
        <defs>
          <filter
            id="back-player_svg__a"
            x={3.934}
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
              result="effect1_dropShadow_401_289"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_401_289"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
);
