import * as React from "react";
import { SVGAttributes } from "react";

export const FlagRightIcon = React.memo(
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
          d="M12.634 6.76a.732.732 0 010 1.268l-11.535 6.66A.732.732 0 010 14.053V.733C0 .17.61-.183 1.099.1l11.535 6.66z"
        />
      </svg>
    );
  }
);

FlagRightIcon.displayName = "FlagRightIcon";
