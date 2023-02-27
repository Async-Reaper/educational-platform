import * as React from "react";
import { SVGAttributes } from "react";

export const InstagramIcon = React.memo(
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
          d="M13.582 12.386a1.582 1.582 0 11-3.164 0 1.582 1.582 0 013.164 0z"
          fill={color}
        />
        <path
          d="M14.672 7.605H9.328c-1.163 0-2.11.946-2.11 2.11v5.343c0 1.164.947 2.11 2.11 2.11h5.344c1.163 0 2.11-.946 2.11-2.11V9.715c0-1.164-.947-2.11-2.11-2.11zM12 15.023a2.64 2.64 0 01-2.637-2.636A2.64 2.64 0 0112 9.75a2.64 2.64 0 012.637 2.636A2.64 2.64 0 0112 15.024zm3.023-5.133a.527.527 0 110-1.054.527.527 0 010 1.054z"
          fill={color}
        />
        <path
          d="M16.254 3.387H7.746A4.752 4.752 0 003 8.133v8.507a4.752 4.752 0 004.746 4.747h8.508A4.752 4.752 0 0021 16.64V8.133a4.752 4.752 0 00-4.746-4.746zm1.582 11.671a3.168 3.168 0 01-3.164 3.165H9.328a3.168 3.168 0 01-3.164-3.165V9.715A3.168 3.168 0 019.328 6.55h5.344a3.168 3.168 0 013.164 3.164v5.343z"
          fill={color}
        />
      </svg>
    );
  }
);

InstagramIcon.displayName = "InstagramIcon";
