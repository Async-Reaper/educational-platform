import * as React from "react";
import { SVGAttributes } from "react";

export const CrownIcon = React.memo(
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
          d="M21.334 17.688l-.417 1.807a.813.813 0 01-.792.63H3.875a.813.813 0 01-.792-.63l-.417-1.808h18.668zm2.021-8.755l-1.646 7.13H2.291L.645 8.933a.814.814 0 011.195-.888l5.029 2.874 4.454-6.682a.815.815 0 01.647-.362.804.804 0 01.671.314l5.224 6.716 4.247-2.831a.814.814 0 011.243.859z"
          fill={color}
        />
      </svg>
    );
  }
);

CrownIcon.displayName = "CrownIcon";
