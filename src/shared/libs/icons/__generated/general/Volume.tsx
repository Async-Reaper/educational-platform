import * as React from "react";
import { SVGAttributes } from "react";

export const VolumeIcon = React.memo(
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
          d="M9.005 12.76a.817.817 0 01-1.339.63L3.197 9.687H.817A.817.817 0 010 8.869V5.613c0-.452.366-.818.817-.818h2.38l4.47-3.703a.817.817 0 011.34.63L9.004 12.76zm3.142-1.277a.817.817 0 01-.637-.237l-.11-.11a.817.817 0 01-.078-1.064 4.717 4.717 0 00.935-2.83c0-1.105-.367-2.14-1.06-2.995a.817.817 0 01.055-1.093l.11-.11a.819.819 0 011.211.06 6.465 6.465 0 011.471 4.138c0 1.422-.45 2.777-1.3 3.915a.818.818 0 01-.597.326zm3.38 2.526a.818.818 0 01-1.204.051l-.107-.107c-.3-.3-.32-.78-.047-1.104a8.726 8.726 0 002.044-5.608c0-2.13-.777-4.18-2.189-5.774a.818.818 0 01.033-1.119l.107-.107a.817.817 0 011.19.034A10.48 10.48 0 0118 7.24c0 2.475-.878 4.878-2.474 6.768z"
          fill="#EFEFEF"
        />
      </svg>
    );
  }
);

VolumeIcon.displayName = "VolumeIcon";