import * as React from "react";
import { SVGAttributes } from "react";

export const DownloadIcon = React.memo(
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
          d="M16.219 11.205a.531.531 0 00-.486-.33H13.6V3.562c0-.31-.239-.562-.533-.562h-2.134c-.294 0-.533.252-.533.563v7.312H8.267c-.21 0-.4.13-.486.33a.585.585 0 00.085.603l3.733 4.5A.52.52 0 0012 16.5c.154 0 .3-.07.401-.192l3.733-4.5a.585.585 0 00.085-.603z"
          fill={color}
        />
        <path
          d="M17.867 15.375v3.375H6.133v-3.375H4v4.5C4 20.497 4.478 21 5.067 21h13.866c.59 0 1.067-.503 1.067-1.125v-4.5h-2.133z"
          fill={color}
        />
      </svg>
    );
  }
);

DownloadIcon.displayName = "DownloadIcon";
