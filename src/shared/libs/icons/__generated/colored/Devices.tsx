import * as React from "react";
import { SVGAttributes } from "react";

export const DevicesIcon = React.memo(
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
          d="M18.425 9.45l-3.772.003c-.615 0-1.126.5-1.126 1.116v7.872c0 .615.51 1.192 1.126 1.192h.005l3.765-.042c.615 0 1.117-.52 1.117-1.135l.004-7.877c0-.618-.501-1.13-1.119-1.13zm-2.217.55h.667a.316.316 0 010 .632h-.667a.316.316 0 010-.632zm-1.15.038a.329.329 0 01.446 0 .318.318 0 010 .447.321.321 0 01-.224.093.32.32 0 01-.316-.316.32.32 0 01.093-.224zm1.484 9.207a.475.475 0 110-.95.475.475 0 010 .95zm2.354-1.35c0 .088-.07.159-.158.159h-4.421a.158.158 0 01-.158-.158v-6.632c0-.087.07-.158.158-.158h4.421c.088 0 .158.07.158.158v6.632z"
          fill="url(#devices_svg__a)"
        />
        <path
          d="M22.05 15.685h-.943V5.203c0-.713-.581-1.203-1.295-1.203H4.4c-.714 0-1.295.49-1.295 1.203v10.482h-.943c-.087 0-.162-.024-.162.063v.147c0 .791.648 1.527 1.44 1.527h10.403v-2.369h-9.79V5.421h16.106v9.633h-.79v2.368h1.403c.792 0 1.44-.736 1.44-1.527v-.147c0-.087-.075-.063-.162-.063zm-9.721-10.77a.315.315 0 01-.446-.446.323.323 0 01.446 0 .314.314 0 010 .447z"
          fill="url(#devices_svg__b)"
        />
        <defs>
          <linearGradient
            id="devices_svg__a"
            x1={16.536}
            y1={9.449}
            x2={16.536}
            y2={19.633}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9B53C8" />
            <stop offset={1} stopColor="#9351FE" />
          </linearGradient>
          <linearGradient
            id="devices_svg__b"
            x1={12.106}
            y1={4}
            x2={12.106}
            y2={17.422}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9B53C8" />
            <stop offset={1} stopColor="#9351FE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
