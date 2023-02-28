import * as React from "react";
import { SVGAttributes } from "react";

export const LogoIcon = React.memo(
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
          fillRule="evenodd"
          d="M28.082 22.344A14.932 14.932 0 0030 15c0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 1.589 0 3.12-.247 4.557-.705l-6.368-6.368a8.13 8.13 0 119.664-5.813l5.23 5.23z"
          clipRule="evenodd"
        />
        <rect
          width={19}
          height={6.169}
          fill="#fff"
          rx={3.084}
          transform="scale(-1 1) rotate(-45 18.926 51.393)"
        />
      </svg>
    );
  }
);

LogoIcon.displayName = "LogoIcon";
