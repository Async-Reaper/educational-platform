import * as React from "react";
import { SVGAttributes } from "react";

export const TimerIcon = React.memo(
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
          d="M32.072 34h-3.51V18.55l-3.27 3.39-2.04-2.13 5.76-5.82h3.06V34zM77.33 51h-1.26v-3.78c0-.696-.316-1.044-.948-1.044-.264 0-.52.076-.768.228-.248.152-.44.332-.576.54V51h-1.26v-3.78c0-.696-.32-1.044-.96-1.044-.256 0-.508.076-.756.228-.24.152-.432.336-.576.552V51h-1.26v-5.796h1.26v.792c.144-.216.392-.424.744-.624.36-.208.74-.312 1.14-.312.84 0 1.368.356 1.584 1.068.184-.288.456-.536.816-.744.36-.216.744-.324 1.152-.324 1.112 0 1.668.584 1.668 1.752V51zm2.257-6.504a.778.778 0 01-.78-.78.778.778 0 01.78-.78c.215 0 .4.076.551.228a.752.752 0 01.228.552c0 .216-.076.4-.228.552a.752.752 0 01-.552.228zM80.222 51h-1.26v-5.796h1.26V51zm6.807 0h-1.26v-3.624c0-.8-.388-1.2-1.164-1.2a1.68 1.68 0 00-.852.228 2.049 2.049 0 00-.636.552V51h-1.26v-5.796h1.26v.792c.216-.256.504-.476.864-.66.36-.184.752-.276 1.176-.276.616 0 1.08.16 1.392.48.32.32.48.78.48 1.38V51z"
          fill="#ECECEC"
        />
        <path
          d="M30.4 4.4v4.2m25.2 21.8h-4.2m-42.8 0H4.4m26 21v4.2M14.536 45.566l-2.97 2.97m36.97-35.97l-2.97 2.97M45 45.566l2.97 2.97M11 12.566l2.97 2.97M59 30c0 16.016-12.984 29-29 29S1 46.016 1 30 13.984 1 30 1s29 12.984 29 29z"
          stroke="#DCDCDC"
          strokeWidth={0.8}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

TimerIcon.displayName = "TimerIcon";
