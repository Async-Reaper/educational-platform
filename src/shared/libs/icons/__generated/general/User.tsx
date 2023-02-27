import * as React from "react";
import { SVGAttributes } from "react";

export const UserIcon = React.memo(
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
          d="M12 9.471c-2.093 0-3.795-1.674-3.795-3.735S9.906 2 12 2c2.093 0 3.795 1.675 3.795 3.736 0 2.06-1.702 3.735-3.795 3.735zm0 1.546c4.122 0 7 1.546 7 6.892C19 19.326 17.43 21 12 21s-7-1.481-7-3.091c0-5.41 2.813-6.892 7-6.892z"
          fill={color}
        />
      </svg>
    );
  }
);

UserIcon.displayName = "UserIcon";
