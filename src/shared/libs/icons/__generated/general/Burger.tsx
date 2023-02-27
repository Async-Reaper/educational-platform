import * as React from "react";
import { SVGAttributes } from "react";

export const BurgerIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <rect x={3} y={2} width={18} height={2.842} rx={1.421} fill={color} />
        <rect
          x={3}
          y={9.579}
          width={18}
          height={2.842}
          rx={1.421}
          fill={color}
        />
        <rect
          x={3}
          y={17.158}
          width={18}
          height={2.842}
          rx={1.421}
          fill={color}
        />
      </svg>
    );
  }
);

BurgerIcon.displayName = "BurgerIcon";
