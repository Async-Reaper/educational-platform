import * as React from "react";
import { SVGAttributes } from "react";

export const ArrowRoundedIcon = React.memo(
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
          fill="#9B53C8"
          d="M31.826 25.36H1.566a1.566 1.566 0 010-3.13h30.26a1.566 1.566 0 010 3.13z"
        />
        <path
          fill="#9B53C8"
          d="M23.478 33.71a1.566 1.566 0 01-1.106-2.673l7.242-7.243-7.242-7.242a1.566 1.566 0 012.215-2.214l8.347 8.348a1.566 1.566 0 010 2.214l-8.347 8.348c-.307.31-.708.461-1.109.461z"
        />
        <path
          fill="#9B53C8"
          d="M25.043 46.752c-9.498 0-17.883-5.715-21.366-14.56A1.565 1.565 0 116.59 31.05c3.008 7.636 10.251 12.572 18.453 12.572 10.932 0 19.827-8.895 19.827-19.826 0-10.932-8.895-19.827-19.827-19.827-8.202 0-15.445 4.936-18.453 12.572a1.565 1.565 0 11-2.913-1.143C7.16 6.552 15.545.837 25.043.837 37.701.838 48 11.138 48 23.796c0 12.657-10.3 22.957-22.957 22.957z"
        />
      </svg>
    );
  }
);

ArrowRoundedIcon.displayName = "ArrowRoundedIcon";
