import * as React from "react";
import { SVGAttributes } from "react";

export const KeyIcon = React.memo(
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
          d="M21.898 11.283c-1.752 2.427-4.314 3.236-7.213 2.561-.067.135-2.427 2.494-2.427 2.494h-1.955v2.224H8.08v2.157H5.92v2.224H2.618c-.067 0-1.618-1.55-1.618-1.617 0-.337.809-3.303.944-3.505.067-.068 6.809-6.74 7.955-7.886l.337-.337c-.81-2.763-.135-5.594 2.224-7.347 2.764-2.09 5.865-1.752 8.494.337 2.562 1.955 2.764 6.2.944 8.695zM9.63 12.563l-6.27 6c-.337.404.135.943.54.606l6.27-5.999c.404-.336-.135-.943-.54-.606zm8.966-9.166a2.1 2.1 0 00-2.09 2.09c0 1.078.944 2.021 2.09 2.021 1.079 0 2.023-.943 2.023-2.021 0-1.146-.944-2.09-2.023-2.09z"
          fill={color}
        />
      </svg>
    );
  }
);

KeyIcon.displayName = "KeyIcon";
