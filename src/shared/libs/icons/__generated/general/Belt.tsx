import * as React from "react";
import { SVGAttributes } from "react";

export const BeltIcon = React.memo(
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
          d="M18.607 17.304c-.584-.505-1.245-1.078-1.245-1.584l.018-5.609a4.671 4.671 0 00-1.363-3.346 5.626 5.626 0 00-2.698-1.496V4.52c0-.687-.54-1.247-1.204-1.247-.663 0-1.203.56-1.203 1.247v.749a5.63 5.63 0 00-2.698 1.496 4.671 4.671 0 00-1.363 3.347l.018 5.607c0 .507-.662 1.08-1.245 1.586-.655.567-1.274 1.103-1.26 1.714a.272.272 0 00.272.266h14.959a.272.272 0 00.271-.266c.015-.611-.604-1.147-1.259-1.715zm-8.622 2.652c0 1.027.955 1.862 2.13 1.862 1.174 0 2.13-.835 2.13-1.862v-.033h-4.26v.033z"
          fill={color}
        />
      </svg>
    );
  }
);

BeltIcon.displayName = "BeltIcon";
