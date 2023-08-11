import * as React from "react";
import { SVGAttributes } from "react";

export const TestCheckedIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <circle cx={3.872} cy={6.872} r={1.872} fill="#fff" />
        <circle cx={3.872} cy={12.113} r={1.872} fill="#D5ABFF" />
        <circle cx={3.872} cy={17.355} r={1.872} fill="#D5ABFF" />
        <rect
          x={6.755}
          y={6.234}
          width={15.832}
          height={1.267}
          rx={0.633}
          fill="#fff"
        />
        <rect
          x={6.755}
          y={11.381}
          width={15.832}
          height={1.267}
          rx={0.633}
          fill="#D5ABFF"
        />
        <rect
          x={6.755}
          y={16.849}
          width={15.832}
          height={1.267}
          rx={0.633}
          fill="#D5ABFF"
        />
        <path
          d="M3.287 7.1l.52.52.953-1.386"
          stroke="#9B53C8"
          strokeWidth={1.078}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
