import * as React from "react";
import { SVGAttributes } from "react";

export const ArrowToCubeIcon = React.memo(
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
          d="M162.6 1.37l47.27 28.026L.885 149.001"
          stroke="url(#arrow-to-cube_svg__a)"
          strokeWidth={2.788}
        />
        <g filter="url(#arrow-to-cube_svg__b)">
          <path
            d="M135.923 53.291l-.654-7.171c-.013-.153.084-.3.269-.406l3.923-2.265c.258-.149.644-.196.985-.122.341.077.574.26.592.47l.611 6.693 11.591.352c.365.011.685.145.815.342.13.197.048.42-.21.569l-3.922 2.264a1.382 1.382 0 01-.703.157l-12.422-.378c-.472-.014-.852-.233-.875-.505z"
            fill="url(#arrow-to-cube_svg__c)"
          />
          <path
            d="M144.423 48.384l-.654-7.171c-.013-.153.084-.3.269-.406l3.923-2.265c.258-.149.644-.196.985-.122.341.077.574.26.592.47l.611 6.693 11.591.352c.365.011.685.145.815.342.13.197.048.42-.21.569l-3.923 2.265c-.185.107-.44.162-.702.156l-12.422-.378c-.472-.014-.852-.233-.875-.505z"
            fill="url(#arrow-to-cube_svg__d)"
          />
        </g>
        <g filter="url(#arrow-to-cube_svg__e)">
          <path
            d="M35.923 111.291l-.654-7.171c-.013-.153.084-.299.27-.406l3.922-2.265c.258-.149.644-.196.985-.122.341.077.574.261.592.471l.611 6.692 11.591.352c.365.011.685.145.815.342.13.197.048.42-.21.569l-3.922 2.265a1.384 1.384 0 01-.703.156l-12.422-.378c-.472-.014-.852-.233-.875-.505z"
            fill="url(#arrow-to-cube_svg__f)"
          />
          <path
            d="M44.423 106.384l-.654-7.171c-.013-.153.084-.3.27-.406l3.922-2.265c.258-.149.644-.196.985-.122.341.077.574.26.592.47l.611 6.693 11.59.352c.366.011.686.145.816.342.13.197.048.42-.21.569l-3.923 2.265c-.185.107-.44.162-.702.156l-12.422-.378c-.472-.014-.852-.233-.875-.505z"
            fill="url(#arrow-to-cube_svg__g)"
          />
        </g>
        <defs>
          <linearGradient
            id="arrow-to-cube_svg__a"
            x1={133.969}
            y1={6.571}
            x2={40.129}
            y2={162.37}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9352FC" stopOpacity={0.21} />
            <stop offset={0.509} stopColor="#9352FC" stopOpacity={0.908} />
            <stop offset={1} stopColor="#9352FC" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="arrow-to-cube_svg__c"
            x1={134.787}
            y1={55.887}
            x2={160.709}
            y2={54.218}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9352FC" />
            <stop offset={1} stopColor="#9352FC" stopOpacity={0.47} />
          </linearGradient>
          <linearGradient
            id="arrow-to-cube_svg__d"
            x1={143.287}
            y1={50.98}
            x2={169.209}
            y2={49.31}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9352FC" />
            <stop offset={1} stopColor="#9352FC" stopOpacity={0.47} />
          </linearGradient>
          <linearGradient
            id="arrow-to-cube_svg__f"
            x1={34.787}
            y1={113.887}
            x2={60.709}
            y2={112.218}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9352FC" />
            <stop offset={1} stopColor="#9352FC" stopOpacity={0.47} />
          </linearGradient>
          <linearGradient
            id="arrow-to-cube_svg__g"
            x1={43.287}
            y1={108.98}
            x2={69.209}
            y2={107.311}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9352FC" />
            <stop offset={1} stopColor="#9352FC" stopOpacity={0.47} />
          </linearGradient>
          <filter
            id="arrow-to-cube_svg__b"
            x={135.268}
            y={38.386}
            width={27.348}
            height={19.789}
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
            <feBlend in2="shape" result="effect1_innerShadow_251_6" />
          </filter>
          <filter
            id="arrow-to-cube_svg__e"
            x={35.268}
            y={96.385}
            width={27.348}
            height={19.789}
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
            <feBlend in2="shape" result="effect1_innerShadow_251_6" />
          </filter>
        </defs>
      </svg>
    );
  }
);
