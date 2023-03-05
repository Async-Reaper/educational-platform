import * as React from "react";
import { SVGAttributes } from "react";

export const SmartphoneIcon = React.memo(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.187 0h27.164c2.313 0 4.187 1.98 4.187 4.423V55.97c0 2.442-1.874 4.422-4.187 4.422H4.187C1.875 60.393 0 58.413 0 55.971V4.423C0 1.98 1.875 0 4.187 0zM33.23 55.326V5.067c0-.687-.258-1.346-.718-1.831a2.388 2.388 0 00-1.734-.759H25.5c-.201 0-.398.06-.569.174a1.11 1.11 0 00-.393.468l-.732 1.62a1.108 1.108 0 01-.393.468 1.03 1.03 0 01-.57.173H12.685a1.03 1.03 0 01-.569-.173 1.109 1.109 0 01-.393-.468l-.732-1.62a1.108 1.108 0 00-.393-.468 1.025 1.025 0 00-.57-.174H4.761a2.34 2.34 0 00-.938.197 2.44 2.44 0 00-.796.562 2.59 2.59 0 00-.531.84 2.717 2.717 0 00-.187.991v50.26c-.002.339.06.675.182.99.122.314.302.6.528.84.227.24.497.432.794.562.297.13.615.198.936.198h26.029c.322 0 .641-.066.94-.196.297-.13.568-.32.796-.561.228-.24.408-.527.531-.841.123-.315.186-.652.185-.993z"
          fill="#ECECEC"
        />
        <path
          d="M24.503 53.823H11.037c-.46 0-.834.394-.834.88s.373.88.834.88h13.466c.46 0 .833-.394.833-.88s-.373-.88-.833-.88z"
          fill="#ECECEC"
        />
        <path
          d="M47.12 15.694V29.32c0 .781-.293 1.53-.816 2.083a2.716 2.716 0 01-1.972.863H30.315l-5.927 6.952v-6.952h-2.26a2.72 2.72 0 01-1.97-.864 3.036 3.036 0 01-.818-2.082V15.694c0-.78.295-1.53.818-2.082a2.72 2.72 0 011.97-.864h22.204c.74 0 1.449.31 1.972.863.523.553.817 1.302.817 2.083z"
          fill="#fff"
        />
        <path
          d="M26.189 26.279a3.048 3.048 0 01-2.184-.692 2.414 2.414 0 01-.557-.803 2.53 2.53 0 01-.203-.973h.88a1.6 1.6 0 00.183.686c.112.21.27.388.46.52.415.27.896.406 1.383.391.434.022.865-.095 1.236-.334.146-.094.266-.228.349-.386.082-.16.123-.338.12-.519a.963.963 0 00-.12-.515.893.893 0 00-.368-.36 6.702 6.702 0 00-1.67-.54 3.746 3.746 0 01-1.7-.737 1.582 1.582 0 01-.394-.567 1.66 1.66 0 01-.122-.692c-.005-.28.053-.558.17-.811.117-.252.289-.472.501-.641a2.668 2.668 0 011.783-.567 2.926 2.926 0 011.883.572c.237.19.428.435.56.716.132.281.2.59.199.904h-.887c-.093-.883-.664-1.325-1.714-1.325a1.989 1.989 0 00-1.186.303.916.916 0 00-.31.345.977.977 0 00-.108.461c-.007.136.02.27.08.392.059.12.148.222.257.294.394.216.817.365 1.255.442.496.108.985.25 1.464.423.355.134.673.357.928.649.268.325.407.748.387 1.178.004.3-.058.598-.181.87a1.931 1.931 0 01-.528.692 2.7 2.7 0 01-1.846.623zm10.321-.125h-.868V19.95l-1.97 6.204h-.818l-1.972-6.204v6.204h-.864v-7.292h1.371l1.87 6.08 1.883-6.08h1.371l-.004 7.292zm4.149.124a3.048 3.048 0 01-2.184-.691 2.414 2.414 0 01-.556-.804 2.53 2.53 0 01-.203-.973h.88c.01.24.072.476.184.686.112.21.27.388.46.52.415.27.895.406 1.383.39.434.023.865-.094 1.236-.333.146-.095.266-.228.348-.387.082-.158.124-.337.12-.518a.963.963 0 00-.119-.515.894.894 0 00-.369-.36 6.702 6.702 0 00-1.67-.54 3.747 3.747 0 01-1.7-.737 1.582 1.582 0 01-.394-.567 1.662 1.662 0 01-.122-.692c-.004-.28.054-.559.17-.811a1.77 1.77 0 01.502-.641 2.669 2.669 0 011.783-.567 2.926 2.926 0 011.883.572c.236.19.428.435.56.716.131.281.2.59.198.904h-.888c-.093-.883-.665-1.325-1.715-1.325a1.988 1.988 0 00-1.185.303.914.914 0 00-.31.345.977.977 0 00-.109.46.799.799 0 00.08.392c.06.121.148.223.257.295a4.12 4.12 0 001.255.442c.497.108.986.25 1.465.423.354.134.672.357.928.649.268.325.406.747.386 1.178.004.3-.058.598-.18.87a1.932 1.932 0 01-.529.692 2.7 2.7 0 01-1.845.624z"
          fill="#9F9F9F"
        />
      </svg>
    );
  }
);

SmartphoneIcon.displayName = "SmartphoneIcon";
