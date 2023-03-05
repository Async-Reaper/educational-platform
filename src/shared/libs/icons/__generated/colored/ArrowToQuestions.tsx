import * as React from "react";
import { SVGAttributes } from "react";

export const ArrowToQuestionsIcon = React.memo(
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
          d="M3.886 23.404l38.33 22.032L120.32.686l44.369 25.617"
          stroke="url(#arrow-to-questions_svg__a)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g filter="url(#arrow-to-questions_svg__b)">
          <path
            d="M26.975 51.257l-12.788.389a1.403 1.403 0 01-.724-.16l-4.039-2.332c-.265-.153-.35-.382-.217-.585.136-.203.465-.341.839-.352l11.933-.363.628-6.888c.02-.217.258-.407.61-.484.352-.078.75-.03 1.014.124l4.039 2.331c.19.11.29.262.278.418l-.673 7.382c-.025.28-.416.506-.9.52z"
            fill="url(#arrow-to-questions_svg__c)"
          />
          <path
            d="M18.225 46.205l-12.788.389a1.401 1.401 0 01-.724-.16L.674 44.102c-.265-.153-.35-.382-.216-.585.136-.203.464-.34.838-.352l11.934-.363.627-6.888c.02-.217.258-.407.61-.484.352-.078.75-.029 1.015.124l4.038 2.331c.191.11.29.262.279.418l-.673 7.382c-.026.28-.416.506-.901.52z"
            fill="url(#arrow-to-questions_svg__d)"
          />
        </g>
        <g filter="url(#arrow-to-questions_svg__e)">
          <path
            d="M137.975 25.257l-12.788.389a1.408 1.408 0 01-.725-.16l-4.038-2.332c-.265-.153-.35-.382-.217-.585.136-.203.465-.341.839-.352l11.933-.363.628-6.888c.02-.217.258-.407.609-.484.353-.078.75-.03 1.015.124l4.039 2.331c.191.11.289.262.278.418l-.673 7.382c-.025.28-.416.506-.9.52z"
            fill="url(#arrow-to-questions_svg__f)"
          />
          <path
            d="M129.225 20.205l-12.788.389a1.4 1.4 0 01-.724-.16l-4.039-2.332c-.265-.153-.35-.382-.216-.585.136-.203.464-.34.838-.352l11.934-.363.627-6.888c.02-.217.258-.407.61-.484.352-.078.749-.029 1.015.124l4.038 2.332c.191.11.289.261.279.417l-.673 7.382c-.026.28-.416.506-.901.52z"
            fill="url(#arrow-to-questions_svg__g)"
          />
        </g>
        <defs>
          <linearGradient
            id="arrow-to-questions_svg__a"
            x1={164.689}
            y1={23.061}
            x2={-7.134}
            y2={18.548}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ACACAC" stopOpacity={0.21} />
            <stop offset={0.472} stopColor="#7C6969" stopOpacity={0.908} />
            <stop offset={0.739} stopColor="#D1D1D1" stopOpacity={0.93} />
            <stop offset={1} stopColor="#989898" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="arrow-to-questions_svg__c"
            x1={31.604}
            y1={51.932}
            x2={31.272}
            y2={36.47}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CBBCBA" />
            <stop offset={1} stopColor="#AFADAD" stopOpacity={0.47} />
          </linearGradient>
          <linearGradient
            id="arrow-to-questions_svg__d"
            x1={22.854}
            y1={46.88}
            x2={22.522}
            y2={31.419}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CBBCBA" />
            <stop offset={1} stopColor="#AFADAD" stopOpacity={0.47} />
          </linearGradient>
          <linearGradient
            id="arrow-to-questions_svg__f"
            x1={142.604}
            y1={25.932}
            x2={142.272}
            y2={10.47}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CBBCBA" />
            <stop offset={1} stopColor="#AFADAD" stopOpacity={0.47} />
          </linearGradient>
          <linearGradient
            id="arrow-to-questions_svg__g"
            x1={133.854}
            y1={20.88}
            x2={133.522}
            y2={5.419}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CBBCBA" />
            <stop offset={1} stopColor="#AFADAD" stopOpacity={0.47} />
          </linearGradient>
          <filter
            id="arrow-to-questions_svg__b"
            x={0.395}
            y={35.393}
            width={28.154}
            height={20.253}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect1_innerShadow_251_5" />
          </filter>
          <filter
            id="arrow-to-questions_svg__e"
            x={111.395}
            y={9.393}
            width={28.154}
            height={20.253}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect1_innerShadow_251_5" />
          </filter>
        </defs>
      </svg>
    );
  }
);

ArrowToQuestionsIcon.displayName = "ArrowToQuestionsIcon";
