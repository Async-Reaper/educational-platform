import * as React from "react";
import { SVGAttributes } from "react";

export const LogoIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <g clipPath="url(#logo_svg__a)" fill="#9B53C8">
          <path d="M.255 10.442C.127 10.824 0 19.61 0 30.009V48.94l2.504-.255c3.948-.424 7.81-2.207 10.697-4.88 3.013-2.76 4.414-5.01 5.73-9.127l.934-3.056.042 8.574.043 8.617h18.846l-9.636-9.678-9.635-9.678V9.762h-9.508c-8.277 0-9.55.085-9.762.68z" />
          <path d="M30.052 19.27c-5.094 5.179-9.253 9.55-9.253 9.72 0 .213 4.074.383 9.04.425l9 .085.127 9.635.084 9.678h19.313l-9.677-9.678L39.05 29.5l9.55-9.55c5.264-5.264 9.551-9.678 9.551-9.848 0-.212-4.245-.297-9.423-.255l-9.465.043-9.211 9.38z" />
        </g>
        <defs>
          <clipPath id="logo_svg__a">
            <path fill="#fff" d="M0 0h59v59H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
