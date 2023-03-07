import * as React from "react";
import { SVGAttributes } from "react";

export const LoadingIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <mask id="loading_svg__a" fill="#fff">
          <path d="M1.376 8.393a.742.742 0 01-.464-.98 12 12 0 114.793 14.803.742.742 0 01-.199-1.066c.25-.351.735-.431 1.104-.209A10.44 10.44 0 102.392 7.915c-.168.397-.609.617-1.016.478z" />
        </mask>
        <path
          d="M1.376 8.393a.742.742 0 01-.464-.98 12 12 0 114.793 14.803.742.742 0 01-.199-1.066c.25-.351.735-.431 1.104-.209A10.44 10.44 0 102.392 7.915c-.168.397-.609.617-1.016.478z"
          stroke={color}
          strokeWidth={6}
          mask="url(#loading_svg__a)"
        />
      </svg>
    );
  }
);
