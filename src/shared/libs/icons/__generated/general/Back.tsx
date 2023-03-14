import * as React from "react";
import { SVGAttributes } from "react";

export const BackIcon = React.memo(
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
          d="M19.5 35.45h12.3c4.25 0 7.7-3.45 7.7-7.7s-3.45-7.7-7.7-7.7H14.875m3.55 3.875l-3.925-3.95 3.925-3.925M19.5 52h15C47 52 52 47 52 34.5v-15C52 7 47 2 34.5 2h-15C7 2 2 7 2 19.5v15C2 47 7 52 19.5 52z"
          stroke={color}
          strokeWidth={3.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
