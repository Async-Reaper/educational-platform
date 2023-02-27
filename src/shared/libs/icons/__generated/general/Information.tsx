import * as React from "react";
import { SVGAttributes } from "react";

export const InformationIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <g
          clipPath="url(#information_svg__a)"
          fill={color}
          stroke={color}
          strokeWidth={0.2}
        >
          <path d="M11.001 20.954A9.965 9.965 0 011.047 11a9.954 9.954 0 119.954 9.954zm4.655-16.921a8.38 8.38 0 00-4.655-1.412A8.388 8.388 0 002.622 11a8.38 8.38 0 1013.034-6.967z" />
          <path d="M11.557 15.223a.787.787 0 01-1.345-.557v-4.583a.787.787 0 011.575 0v4.583c0 .21-.083.41-.23.557zm-.556-6.873a1.017 1.017 0 110-2.033 1.017 1.017 0 010 2.033z" />
        </g>
        <defs>
          <clipPath id="information_svg__a">
            <path
              fill="#fff"
              transform="matrix(-1 0 0 1 22 0)"
              d="M0 0h22v22H0z"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

InformationIcon.displayName = "InformationIcon";
