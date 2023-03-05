import * as React from "react";
import { SVGAttributes } from "react";

export const Questions3DIcon = React.memo(
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
          d="M100.86 107.876V21.715l74.621 43.079v30.13l-74.621 43.073v-30.121z"
          fill="#C7C4C4"
        />
        <path
          opacity={0.5}
          d="M100.865 21.714l-74.622 43.08v30.13l74.622 43.073V21.714z"
          fill="#E1DEDE"
        />
        <path
          opacity={0.5}
          fill="#E6E6E6"
          d="M26.235 64.793l74.621-43.079 74.621 43.079-74.62 43.079z"
        />
        <g filter="url(#questions-3d_svg__a)">
          <path
            fill="#F6F6F6"
            d="M26.235 43.606L100.856.528l74.621 43.078-74.62 43.079z"
          />
        </g>
        <rect
          x={1.366}
          width={59.465}
          height={47.36}
          rx={2.366}
          transform="scale(1.22477 .70706) rotate(-45 94.453 -14.873)"
          stroke="#9B53C8"
          strokeWidth={1.577}
        />
        <path
          transform="scale(1.22477 .70706) rotate(-45 101.922 -18.778)"
          stroke="#9B53C8"
          strokeWidth={1.577}
          d="M0-.789h60.012"
        />
        <circle
          cx={1.288}
          cy={1.288}
          r={1.288}
          transform="scale(1.22477 .70706) rotate(-45 94.338 -20.373)"
          fill="#FFDCD8"
          stroke="#9B53C8"
          strokeWidth={0.417}
        />
        <circle
          cx={1.288}
          cy={1.288}
          r={1.288}
          transform="scale(1.22477 .70706) rotate(-45 92.535 -24.725)"
          fill="#FFDCD8"
          stroke="#9B53C8"
          strokeWidth={0.417}
        />
        <circle
          cx={1.288}
          cy={1.288}
          r={1.288}
          transform="scale(1.22477 .70706) rotate(-45 90.732 -29.08)"
          fill="#FFDCD8"
          stroke="#9B53C8"
          strokeWidth={0.417}
        />
        <rect
          width={37.604}
          height={1.803}
          rx={0.901}
          transform="scale(1.22477 .70706) rotate(-45 86.15 -41.023)"
          fill="#FFDCD8"
          stroke="#9B53C8"
          strokeWidth={0.417}
        />
        <mask id="questions-3d_svg__a" fill="#fff">
          <rect
            width={41.725}
            height={29.62}
            rx={0.631}
            transform="scale(1.22477 .70706) rotate(-45 104.576 -26.434)"
          />
        </mask>
        <rect
          width={41.725}
          height={29.62}
          rx={0.631}
          transform="scale(1.22477 .70706) rotate(-45 104.576 -26.434)"
          stroke="#9B53C8"
          strokeWidth={3.155}
          strokeLinejoin="round"
          strokeDasharray="6.31 6.31"
          mask="url(#questions-3d_svg__a)"
        />
        <g filter="url(#questions-3d_svg__c)">
          <rect
            width={41.725}
            height={29.62}
            rx={3.155}
            transform="scale(1.22477 .70706) rotate(-45 118.677 -59.229)"
            fill="#FFDADA"
          />
          <rect
            x={1.366}
            width={40.148}
            height={28.043}
            rx={2.366}
            transform="scale(1.22477 .70706) rotate(-45 119.918 -58.926)"
            stroke="#9B53C8"
            strokeWidth={1.577}
          />
        </g>
        <g filter="url(#questions-3d_svg__d)">
          <path
            d="M140.792 42.802l14.849-1.781-3.752 3.215 1.02 3.832-12.117-5.266z"
            fill="#fff"
          />
          <path
            d="M152.523 47.695l-11.059-4.806 13.552-1.626-3.362 2.882-.062.053.017.063.914 3.434z"
            stroke="#9B53C8"
            strokeWidth={0.463}
          />
        </g>
        <defs>
          <filter
            id="questions-3d_svg__a"
            x={22.235}
            y={0.527}
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
              result="effect1_dropShadow_251_3"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_251_3"
              result="shape"
            />
          </filter>
          <filter
            id="questions-3d_svg__c"
            x={92.129}
            y={27.131}
            width={65.264}
            height={40.5}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={3.339} />
            <feGaussianBlur stdDeviation={1.669} />
            <feColorMatrix values="0 0 0 0 0.366667 0 0 0 0 0.322178 0 0 0 0 0.281111 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_251_3"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_251_3"
              result="shape"
            />
          </filter>
          <filter
            id="questions-3d_svg__d"
            x={138.939}
            y={41.021}
            width={18.555}
            height={10.753}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={1.853} />
            <feGaussianBlur stdDeviation={0.927} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_251_3"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_251_3"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
);

Questions3DIcon.displayName = "Questions3DIcon";
