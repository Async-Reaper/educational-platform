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
        <circle cx={5.819} cy={5.819} r={5.819} fill="#fff" />
        <circle cx={5.819} cy={22.113} r={5.819} fill="#D5ABFF" />
        <circle cx={5.819} cy={38.407} r={5.819} fill="#D5ABFF" />
        <rect
          x={14.781}
          y={3.836}
          width={49.219}
          height={3.938}
          rx={1.969}
          fill="#fff"
        />
        <rect
          x={14.781}
          y={19.836}
          width={49.219}
          height={3.938}
          rx={1.969}
          fill="#D5ABFF"
        />
        <rect
          x={14.781}
          y={36.836}
          width={49.219}
          height={3.938}
          rx={1.969}
          fill="#D5ABFF"
        />
        <path
          d="M4 6.53l1.617 1.617L8.58 3.836"
          stroke="#9B53C8"
          strokeWidth={1.078}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

TestCheckedIcon.displayName = "TestCheckedIcon";
