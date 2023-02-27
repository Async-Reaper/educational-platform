import * as React from "react";
import { SVGAttributes } from "react";

export const StrokeIcon = React.memo(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.053.936A1 1 0 012.464.853L6 3.995 9.536.853a1 1 0 011.328 1.494l-4.2 3.734a1 1 0 01-1.328 0l-4.2-3.734A1 1 0 011.053.936z"
          fill={color}
        />
      </svg>
    );
  }
);

StrokeIcon.displayName = "StrokeIcon";
