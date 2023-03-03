import * as React from "react";
import { SVGAttributes } from "react";

export const SectionWaveIcon = React.memo(
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
          d="M0 25.78c261-79.003 480.5 134.504 914.5 75.002C1210 39.28 1344.5-27.222 1536 12.28v3729.11H0V25.78z"
          fill="url(#section-wave_svg__a)"
        />
        <path
          d="M0 25.78c261-79.003 480.5 134.504 914.5 75.002C1210 39.28 1344.5-27.222 1536 12.28v3729.11H0V25.78z"
          fill="url(#section-wave_svg__b)"
        />
        <path
          d="M0 25.78c261-79.003 480.5 134.504 914.5 75.002C1210 39.28 1344.5-27.222 1536 12.28v3729.11H0V25.78z"
          fill="url(#section-wave_svg__c)"
        />
        <defs>
          <radialGradient
            id="section-wave_svg__b"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0 -412.012 525.974 0 732.5 3891.89)"
          >
            <stop stopColor="#4F218A" />
            <stop offset={1} stopColor="#452B14" stopOpacity={0} />
          </radialGradient>
          <radialGradient
            id="section-wave_svg__c"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-607.50015 -13.84976 17.68153 -775.57547 1688 2633.35)"
          >
            <stop stopColor="#331277" />
            <stop offset={1} stopColor="#211445" stopOpacity={0} />
          </radialGradient>
          <linearGradient
            id="section-wave_svg__a"
            x1={768}
            y1={136.98}
            x2={768}
            y2={3822.89}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#15161E" />
            <stop offset={1} stopColor="#0C0D11" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

SectionWaveIcon.displayName = "SectionWaveIcon";
