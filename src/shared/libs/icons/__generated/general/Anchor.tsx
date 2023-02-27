import * as React from "react";
import { SVGAttributes } from "react";

export const AnchorIcon = React.memo(
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
          d="M8.18 12.602a1.025 1.025 0 001.025 1.025h6.151a1.025 1.025 0 100-2.05H9.205a1.025 1.025 0 00-1.026 1.025z"
          fill={color}
        />
        <path
          d="M9.205 16.704H7.369a4.234 4.234 0 01-4.316-3.723 4.102 4.102 0 014.101-4.48h2.05a1.025 1.025 0 000-2.051H7.37a6.305 6.305 0 00-6.315 5.342 6.153 6.153 0 006.1 6.963h2.05a1.025 1.025 0 100-2.051zm14.354-4.881A6.317 6.317 0 0017.16 6.45h-1.548c-.83 0-1.282.461-1.282 1.025A1.025 1.025 0 0015.356 8.5h1.836a4.234 4.234 0 014.316 3.723 4.102 4.102 0 01-4.101 4.48h-2.05a1.025 1.025 0 100 2.052h2.05a6.15 6.15 0 006.152-6.932z"
          fill={color}
        />
      </svg>
    );
  }
);

AnchorIcon.displayName = "AnchorIcon";
