import * as React from "react";
import { SVGAttributes } from "react";

export const TgIcon = React.memo(
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
          d="M22.49.53C22.211.187 21.793 0 21.314 0c-.262 0-.538.055-.822.163L1.156 7.545C.13 7.936-.01 8.524 0 8.84c.01.315.18.894 1.227 1.227l.02.006 2.71.775 13.208-6.747a.67.67 0 01.791 1.054v.001l-7.342 7.802-.21.85 2.622 2.11 3.634 2.927.01.007c.4.31.836.474 1.262.474.834 0 1.497-.616 1.69-1.57l3.17-15.646c.127-.627.02-1.19-.3-1.582z"
        />
        <path
          fill="#9B53C8"
          d="M9.355 12.467a.667.667 0 01.162-.298l4.818-5.12-8.94 4.568 2.03 5.806c.115.33.287.612.5.833l1.43-5.79v.001zm-.183 6.328c.483-.004.957-.208 1.373-.59l1.485-1.368-1.98-1.595-.878 3.553z"
        />
      </svg>
    );
  }
);

TgIcon.displayName = "TgIcon";
