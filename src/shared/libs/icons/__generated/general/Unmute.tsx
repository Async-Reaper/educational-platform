import * as React from "react";
import { SVGAttributes } from "react";

export const UnmuteIcon = React.memo(
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
          d="M10.761 17.895a.84.84 0 01-.381-.087l-5.014-2.704V4.894l5.014-2.702a1.013 1.013 0 01.817 0 .908.908 0 01.382.748v14.09c0 .317-.136.604-.382.748a.826.826 0 01-.436.116zM0 13.897V6.132c0-.49.354-.863.817-.863H3.76v9.49H.817c-.463 0-.817-.373-.817-.862zM14.135 7.67a.638.638 0 11.902-.902l4.511 4.51a.638.638 0 11-.902.902l-4.51-4.51z"
          fill={color}
        />
        <path
          d="M18.646 6.767a.638.638 0 01.902.902l-4.51 4.511a.638.638 0 11-.902-.902l4.51-4.511z"
          fill={color}
        />
      </svg>
    );
  }
);

UnmuteIcon.displayName = "UnmuteIcon";
