import * as React from "react";
import { SVGAttributes } from "react";

export const PlayIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <g clipPath="url(#play_svg__a)">
          <path
            d="M21.174 10.46a1.086 1.086 0 010 1.882L7.329 20.335a1.086 1.086 0 01-1.628-.94V3.407c0-.836.905-1.358 1.628-.94l13.845 7.993z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="play_svg__a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
