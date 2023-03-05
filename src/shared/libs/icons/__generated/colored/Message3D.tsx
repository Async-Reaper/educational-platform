import * as React from "react";
import { SVGAttributes } from "react";

export const Message3DIcon = React.memo(
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
          opacity={0.5}
          d="M78.984 21.138l74.622 43.079v30.13L78.984 137.42V21.138z"
          fill="#C7C4C4"
        />
        <path
          opacity={0.5}
          d="M78.989 21.137L4.367 64.216v30.13l74.622 43.073V21.137z"
          fill="#E1DEDE"
        />
        <path
          opacity={0.5}
          fill="#D9D9D9"
          d="M4.36 64.216l74.62-43.08 74.621 43.08-74.62 43.078z"
        />
        <g filter="url(#message-3d_svg__a)">
          <path
            fill="#F5F5F5"
            d="M4.36 43.208L78.98.129l74.621 43.079-74.62 43.078z"
          />
        </g>
        <path
          d="M80.558 20.386l-41.38 23.888c-2.43 1.403-2.432 3.69 0 5.095L68.595 66.35c2.424 1.4 6.386 1.408 8.825 0l41.379-23.888c2.424-1.4 2.439-3.687 0-5.095L89.383 20.386c-2.424-1.4-6.386-1.408-8.825 0zm2.332 2.05v23.077l-40.147.1L82.89 22.435zM70.927 64.3L42.715 48.014l28.212-.07v16.357zm4.16 0V47.934l9.892-.025c1.145-.003 2.071-.54 2.071-1.2v-5.593h28.199L75.088 64.301zm40.162-25.586H87.05v-16.28l28.199 16.28z"
          fill="#9B53C8"
        />
        <g filter="url(#message-3d_svg__b)">
          <circle
            cx={12.247}
            cy={12.247}
            r={12.247}
            transform="scale(1.22477 .70706) rotate(-45 58.523 -45.296)"
            fill="#fff"
          />
        </g>
        <path
          d="M85.182 22.368l-8.314-4.8h1.819l-2.728 1.575-1.689-.975 3.923-2.265 9.094 5.25-2.105 1.215z"
          fill="#9B53C8"
        />
        <defs>
          <filter
            id="message-3d_svg__a"
            x={0.359}
            y={0.129}
            width={157.242}
            height={100.158}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={10} />
            <feGaussianBlur stdDeviation={2} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_251_2"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_251_2"
              result="shape"
            />
          </filter>
          <filter
            id="message-3d_svg__b"
            x={62.435}
            y={11.22}
            width={38}
            height={25.319}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={2} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_251_2"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_251_2"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
);

Message3DIcon.displayName = "Message3DIcon";
