import * as React from "react";
import { SVGAttributes } from "react";

export const UpIcon = React.memo(
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
          d="M18.31 20.608c-.655 0-1.252-.344-1.532-.885l-3.38-6.502c-.613-1.18-2.451-1.18-3.065 0l-3.415 6.57c-.259.5-.81.817-1.414.817-.604 0-1.155-.317-1.414-.816l-.926-1.782a1.43 1.43 0 010-1.33l7.17-13.795c.613-1.18 2.45-1.18 3.064 0l7.438 14.311c.219.421.219.91 0 1.33l-.622 1.197c-.281.541-.877.886-1.532.886h-.372zm-3.806-.434c.34.654-.142 1.416-.931 1.474l-3.361.247c-.868.064-1.486-.755-1.112-1.474l1.744-3.357c.41-.787 1.634-.787 2.043 0l1.617 3.11z"
          fill={color}
        />
      </svg>
    );
  }
);

UpIcon.displayName = "UpIcon";
