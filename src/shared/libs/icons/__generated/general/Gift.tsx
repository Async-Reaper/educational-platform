import * as React from "react";
import { SVGAttributes } from "react";

export const GiftIcon = React.memo(
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
          d="M18.857 6.286h-.4c.261-.534.398-1.12.4-1.715A3.988 3.988 0 0012 1.783 3.989 3.989 0 005.143 4.57c.002.595.14 1.18.4 1.715h-.4a3.429 3.429 0 00-3.429 3.428V12a1.143 1.143 0 001.143 1.143H4V20a3.429 3.429 0 003.429 3.428h9.143A3.429 3.429 0 0020 20v-6.857h1.143A1.143 1.143 0 0022.286 12V9.714a3.428 3.428 0 00-3.429-3.428zm-8 14.857H7.43A1.143 1.143 0 016.286 20v-6.857h4.571v8zm0-10.286H4V9.714a1.143 1.143 0 011.143-1.143h5.714v2.286zm0-4.571H9.143a1.714 1.714 0 111.714-1.715v1.715zm2.286-1.715a1.715 1.715 0 111.714 1.715h-1.714V4.57zM17.714 20a1.143 1.143 0 01-1.142 1.143h-3.43v-8h4.572V20zM20 10.857h-6.857V8.571h5.714A1.143 1.143 0 0120 9.714v1.143z"
          fill={color}
        />
      </svg>
    );
  }
);

GiftIcon.displayName = "GiftIcon";
