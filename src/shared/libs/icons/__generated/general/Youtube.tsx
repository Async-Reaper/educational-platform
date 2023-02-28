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
          fill="#9B53C8"
          d="M28.935 3.814a3.628 3.628 0 00-2.553-2.553C24.116.64 15.05.64 15.05.64s-9.065 0-11.332.596a3.702 3.702 0 00-2.552 2.577C.569 6.08.569 10.78.569 10.78s0 4.723.597 6.966a3.629 3.629 0 002.553 2.553c2.29.62 11.332.62 11.332.62s9.065 0 11.331-.597a3.628 3.628 0 002.553-2.552c.597-2.267.597-6.966.597-6.966s.023-4.724-.597-6.99zM12.164 15.122V6.438l7.539 4.342-7.54 4.342z"
        />
      </svg>
    );
  }
);

YoutubeIcon.displayName = "YoutubeIcon";
