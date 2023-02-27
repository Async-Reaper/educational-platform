import * as React from "react";
import { SVGAttributes } from "react";

export const ArrowRightIcon = React.memo(
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
          d="M17.429 12.825l.707-.708.707.707-.707.708-.707-.707zm-12.638 1a1 1 0 110-2v2zm8.29-6.763l5.055 5.055-1.414 1.415-5.055-5.055 1.414-1.415zm5.055 6.47l-5.055 5.055-1.414-1.415 5.055-5.055 1.414 1.415zm-.707.293H4.791v-2H17.43v2z"
          fill={color}
        />
      </svg>
    );
  }
);

ArrowRightIcon.displayName = "ArrowRightIcon";
