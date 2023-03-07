import * as React from "react";
import { SVGAttributes } from "react";

export const Cube3DIcon = React.memo(
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
          transform="scale(1.22477 .70706) rotate(-45 214.621 87.504)"
          stroke="url(#cube-3d_svg__a)"
          strokeWidth={2.352}
          d="M2.037 0h139.122v139.122H2.037z"
        />
        <path
          transform="scale(1.22477 .70706) rotate(-45 219.612 74.963)"
          stroke="url(#cube-3d_svg__b)"
          strokeWidth={2.118}
          d="M1.834 0h125.255v125.255H1.834z"
        />
        <path
          d="M123.457 86.42v42.258l-36.596-21.129V65.29l36.596 21.13z"
          fill="#D1422F"
        />
        <path
          d="M160.056 65.29L123.46 86.419h-.003l-36.595-21.13 36.595-21.129 36.599 21.13z"
          fill="#FF998B"
        />
        <path
          d="M160.056 65.29v42.259l-36.599 21.129V86.42h.003l36.596-21.13z"
          fill="#9B53C8"
        />
        <path
          opacity={0.8}
          d="M123.457 86.419v86.419l-74.838-43.209v-86.42l74.838 43.21z"
          fill="#7F3DB4"
        />
        <path
          opacity={0.8}
          d="M198.299 43.21l-74.838 43.21h-.006L48.617 43.21 123.455 0l74.844 43.21z"
          fill="#8148C9"
        />
        <path
          opacity={0.8}
          d="M198.301 43.21v86.419l-74.844 43.209V86.419h.006l74.838-43.21z"
          fill="#A95BF8"
        />
        <defs>
          <linearGradient
            id="cube-3d_svg__a"
            x1={53.266}
            y1={194.741}
            x2={186.879}
            y2={25.481}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B152FC" />
            <stop offset={1} stopColor="#B152FC" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="cube-3d_svg__b"
            x1={63.686}
            y1={0}
            x2={63.686}
            y2={127.373}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9D52FC" />
            <stop offset={1} stopColor="#B152FC" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
