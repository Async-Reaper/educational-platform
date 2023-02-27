import * as React from "react";
import { SVGAttributes } from "react";

export const BoxIcon = React.memo(
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
          d="M16.505 4H7.228a.91.91 0 100 1.819h9.276a.91.91 0 000-1.819zM3 18.458c0 .753.552 1.364 1.233 1.364h15.223c.681 0 1.233-.611 1.233-1.364 0-.377-.273-.682-.616-.682H3.617c-.34 0-.617.305-.617.682zm16.456-11.78h-.858a.81.81 0 00-.746.49 1.23 1.23 0 01-1.123.766H7.037a1.23 1.23 0 01-1.124-.766.81.81 0 00-.745-.49h-.934C3.552 6.678 3 7.26 3 7.978v6.973a.845.845 0 00.819.867H19.87a.845.845 0 00.819-.867V7.977c0-.717-.553-1.3-1.234-1.3zm-4.405 5.593a.91.91 0 01-.91.91H9.594a.91.91 0 01-.91-.91v-.728a.91.91 0 01.91-.91h4.547a.91.91 0 01.91.91v.728z"
          fill={color}
        />
      </svg>
    );
  }
);

BoxIcon.displayName = "BoxIcon";
