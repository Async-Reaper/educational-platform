import * as React from "react";
import { SVGAttributes } from "react";

export const YoutubeIcon = React.memo(
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
          d="M21.588 7.19a2.505 2.505 0 00-1.763-1.762C18.26 5 12 5 12 5s-6.26 0-7.825.412c-.84.23-1.533.922-1.763 1.779C2 8.755 2 12 2 12s0 3.261.412 4.81c.23.856.906 1.531 1.763 1.762C5.756 19 12 19 12 19s6.26 0 7.825-.412a2.505 2.505 0 001.763-1.762c.412-1.565.412-4.81.412-4.81s.016-3.26-.412-4.825zm-11.581 7.808V9.002L15.212 12l-5.205 2.998z"
          fill={color}
        />
      </svg>
    );
  }
);
