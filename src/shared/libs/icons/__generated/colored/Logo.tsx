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
          d="M1.092 5.243C1.046 5.379 1 8.519 1 12.235V19l.901-.091a6.856 6.856 0 003.849-1.744c1.084-.986 1.588-1.79 2.062-3.261l.336-1.092.03 6.143h6.781l-6.934-6.917V5h-3.42c-2.979 0-3.437.03-3.513.243z"
          fill="#9B53C8"
        />
        <path
          d="M11.813 8.398c-1.833 1.85-3.33 3.412-3.33 3.473 0 .076 1.467.137 3.254.152l3.238.03.045 3.443.03 3.458H22l-6.95-6.9 3.437-3.414c1.894-1.88 3.437-3.458 3.437-3.519 0-.076-1.528-.106-3.39-.09l-3.407.014-3.314 3.353z"
          fill="#9B53C8"
        />
      </svg>
    );
  }
);
