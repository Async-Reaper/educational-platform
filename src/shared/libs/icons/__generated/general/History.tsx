import * as React from "react";
import { SVGAttributes } from "react";

export const HistoryIcon = React.memo(
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
          clipPath="url(#history_svg__a)"
          fill={color}
          stroke={color}
          strokeWidth={0.2}
        >
          <path d="M11 .9C5.43.9.9 5.43.9 11c0 5.57 4.53 10.1 10.1 10.1 5.57 0 10.1-4.53 10.1-10.1C21.1 5.43 16.57.9 11 .9zm0 18.631c-4.704 0-8.531-3.827-8.531-8.531 0-4.704 3.827-8.531 8.53-8.531 4.705 0 8.532 3.827 8.532 8.53 0 4.705-3.827 8.532-8.531 8.532z" />
          <path d="M16.16 10.767h-4.65v-5.09a.784.784 0 10-1.569 0v5.874c0 .433.351.784.784.784h5.435a.785.785 0 000-1.569z" />
        </g>
        <defs>
          <clipPath id="history_svg__a">
            <path fill="#fff" d="M0 0h22v22H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

HistoryIcon.displayName = "HistoryIcon";
