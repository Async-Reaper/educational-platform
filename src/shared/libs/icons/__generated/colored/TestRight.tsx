import * as React from "react";
import { SVGAttributes } from "react";

export const TestRightIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <g filter="url(#test-right_svg__a)">
          <path
            d="M25 66.302C25 59.507 30.508 54 37.303 54h174.708c6.795 0 12.304 5.508 12.304 12.303v194.394c0 6.795-5.509 12.303-12.304 12.303H37.303C30.508 273 25 267.492 25 260.697V66.302z"
            fill="#FBFBFB"
          />
        </g>
        <g filter="url(#test-right_svg__b)">
          <path
            d="M36 58.257C36 50.935 41.936 45 49.258 45h188.27c7.323 0 13.259 5.936 13.259 13.258v209.484c0 7.322-5.936 13.258-13.259 13.258H49.258C41.936 281 36 275.064 36 267.742V58.257z"
            fill="#FBFBFB"
          />
        </g>
        <g filter="url(#test-right_svg__c)">
          <path
            d="M46 46.092c0-8.383 6.795-15.178 15.178-15.178h215.529c8.382 0 15.178 6.795 15.178 15.178v239.814c0 8.382-6.796 15.178-15.178 15.178H61.178c-8.383 0-15.178-6.796-15.178-15.178V46.092z"
            fill="#FBFBFB"
          />
        </g>
        <circle
          cx={109.369}
          cy={80.623}
          r={12.901}
          stroke="#CECECE"
          strokeWidth={2.277}
        />
        <path
          d="M122.27 80.623a12.9 12.9 0 01-17.921 11.885"
          stroke="#9D52FC"
          strokeWidth={2.277}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M46 65.823h33.392v235.261H61.178c-8.383 0-15.178-6.796-15.178-15.179V65.823z"
          fill="#9B53C8"
        />
        <path
          d="M68.952 84.575l-.001-.001-5.486-5.486a1.23 1.23 0 00-.875-.362 1.23 1.23 0 00-.876.362l-5.483 5.483-.005.006a1.24 1.24 0 00.862 2.11h.218v4.038c0 .799.65 1.449 1.45 1.449h2.146a.394.394 0 00.394-.394v-3.165a.66.66 0 01.66-.661h1.267a.66.66 0 01.66.66v3.166c0 .217.177.394.395.394h2.146a1.45 1.45 0 001.449-1.45v-4.036h.203a1.24 1.24 0 00.876-2.113zm-.558 1.193a.448.448 0 01-.318.132h-.597a.394.394 0 00-.394.394v4.43a.662.662 0 01-.661.662h-1.752v-2.771a1.45 1.45 0 00-1.45-1.45h-1.265c-.8 0-1.45.65-1.45 1.45v2.77h-1.752a.662.662 0 01-.66-.66v-4.431a.394.394 0 00-.395-.394h-.605a.45.45 0 01-.31-.768v-.001l5.487-5.486a.447.447 0 01.636 0l5.484 5.485.003.002a.451.451 0 01-.001.636zm1.131 42.378h-13.66v.455h13.66v-.455z"
          fill="#fff"
          fillOpacity={0.7}
        />
        <path
          d="M69.576 128.146v-.05h-13.76v.555h13.759v-.505z"
          stroke="#fff"
          strokeOpacity={0.7}
          strokeWidth={0.1}
        />
        <path
          d="M56.776 127.69h2.277a.228.228 0 00.228-.228v-4.098a.228.228 0 00-.228-.228h-2.277a.228.228 0 00-.228.228v4.098c0 .126.102.228.228.228zm.228-4.098h1.821v3.643h-1.821v-3.643z"
          fill="#fff"
          fillOpacity={0.7}
        />
        <path
          d="M56.776 127.74h2.277a.278.278 0 00.278-.278v-4.098a.278.278 0 00-.278-.278h-2.277a.278.278 0 00-.278.278v4.098c0 .154.125.278.278.278zm.278-4.098h1.721v3.543h-1.721v-3.543z"
          stroke="#fff"
          strokeOpacity={0.7}
          strokeWidth={0.1}
        />
        <path
          d="M63.151 127.69h2.277a.228.228 0 00.228-.228v-6.83a.228.228 0 00-.228-.227h-2.277a.228.228 0 00-.227.227v6.83c0 .126.102.228.227.228zm.228-6.83H65.2v6.375h-1.82v-6.375z"
          fill="#fff"
          fillOpacity={0.7}
        />
        <path
          d="M63.151 127.74h2.277a.278.278 0 00.278-.278v-6.83a.277.277 0 00-.278-.277h-2.277a.277.277 0 00-.277.277v6.83c0 .154.124.278.277.278zm.278-6.83h1.721v6.275h-1.72v-6.275z"
          stroke="#fff"
          strokeOpacity={0.7}
          strokeWidth={0.1}
        />
        <path
          d="M59.963 127.69h2.277a.228.228 0 00.227-.228V117.9a.228.228 0 00-.227-.228h-2.277a.228.228 0 00-.228.228v9.562c0 .126.102.228.228.228zm.228-9.562h1.821v9.106h-1.821v-9.106z"
          fill="#fff"
          fillOpacity={0.7}
        />
        <path
          d="M59.963 127.74h2.277a.278.278 0 00.277-.278V117.9a.278.278 0 00-.277-.278h-2.277a.278.278 0 00-.278.278v9.562c0 .153.125.278.278.278zm.278-9.562h1.721v9.006h-1.721v-9.006z"
          stroke="#fff"
          strokeOpacity={0.7}
          strokeWidth={0.1}
        />
        <path
          d="M66.338 127.69h2.277a.228.228 0 00.228-.228v-12.294a.228.228 0 00-.228-.228h-2.277a.228.228 0 00-.228.228v12.294c0 .126.102.228.228.228zm.228-12.294h1.821v11.839h-1.821v-11.839z"
          fill="#fff"
          fillOpacity={0.7}
        />
        <path
          d="M66.338 127.74h2.277a.278.278 0 00.278-.278v-12.294a.278.278 0 00-.278-.278h-2.277a.278.278 0 00-.278.278v12.294c0 .154.125.278.278.278zm.278-12.294h1.721v11.739h-1.721v-11.739z"
          stroke="#fff"
          strokeOpacity={0.7}
          strokeWidth={0.1}
        />
        <path
          d="M66.059 194.389v-1.203a3.904 3.904 0 00-2.766-3.729v-.545a1.132 1.132 0 00-2.262 0v.545a3.904 3.904 0 00-2.765 3.729v1.203a5.922 5.922 0 01-1.655 4.117.377.377 0 00.272.638h3.432a1.889 1.889 0 001.847 1.508 1.89 1.89 0 001.848-1.508h3.431a.377.377 0 00.272-.638 5.922 5.922 0 01-1.654-4.117zm-4.274-5.477a.378.378 0 01.754 0v.396a3.92 3.92 0 00-.754 0v-.396zm.377 10.986c-.492 0-.91-.315-1.066-.754h2.133a1.133 1.133 0 01-1.067.754zm-4.466-1.508a6.666 6.666 0 001.324-4.001v-1.203a3.145 3.145 0 013.142-3.142 3.145 3.145 0 013.142 3.142v1.203c0 1.457.466 2.85 1.325 4.001h-8.933zm9.368-5.204a.377.377 0 00.754 0 5.621 5.621 0 00-1.656-4 .378.378 0 00-.534.534 4.87 4.87 0 011.436 3.466zm-10.181.377a.377.377 0 00.377-.377c0-1.309.51-2.54 1.436-3.466a.378.378 0 00-.533-.534 5.621 5.621 0 00-1.657 4c0 .208.169.377.377.377zm12.548-37.294l-1.526-3.968a1.455 1.455 0 00-1.882-.835l-.032.013-7.627 3.161a1.449 1.449 0 00-.805 1.854l.21.56h-.481a1.423 1.423 0 00-1.422 1.422v5.117a1.424 1.424 0 001.422 1.422h9.666a1.423 1.423 0 001.422-1.422v-5.117a1.39 1.39 0 00-.02-.231l.263-.106a1.461 1.461 0 00.812-1.87zm-12.143 1.24h9.666c.51.001.932.4.961.91H56.327c.03-.51.45-.909.96-.91zm2.286-1.37l1.52-.76.313.781-1.52.76-.313-.781zm8.347 7.454a.968.968 0 01-.967.967h-9.666a.968.968 0 01-.967-.967v-2.9h11.6v2.9zm0-3.355h-11.6v-1.364h11.6v1.364zm.528-2.52l-.238.096a1.424 1.424 0 00-1.257-.76h-6.318l1.161-.581a.226.226 0 00.11-.287l-.482-1.206a.228.228 0 00-.296-.127l-.017.008-1.929.965a.228.228 0 00-.11.288l.377.94h-1.196l-.269-.718a.996.996 0 01.553-1.274l7.627-3.161a.999.999 0 011.315.564l1.526 3.968a1.003 1.003 0 01-.557 1.285z"
          fill="#fff"
          fillOpacity={0.7}
        />
        <path
          d="M66.954 157.004c.531.001 1.02.287 1.28.747l.196-.079a.954.954 0 00.53-1.221l-1.526-3.968-.01-.023a.95.95 0 00-1.24-.513l-.02-.046.02.046-7.627 3.161a.946.946 0 00-.525 1.21l.257.686h1.087l-.349-.872a.277.277 0 01.134-.351l1.928-.965 5.865 2.188zm0 0h-6.106m6.106 0l-6.206.05.1-.05m1.105-.837a.277.277 0 01-.133.351m.133-.351l-1.217.837h.112m1.105-.837l-.482-1.206m.482 1.206l-.843-1.36m.71 1.711l-.023-.045.023.045zm0 0l-.972.486m.262-2.197a.277.277 0 01.36.154m-.36-.154l-.02.009.02-.009zm.36.154l-.045.019.046-.019zm5.484 2.598h-9.666m9.666 0l-9.666-.05v.05m9.666 0a.915.915 0 01.907.81m-.907-.81v-.05l.907.86m-10.573-.81a.915.915 0 00-.907.81m.907-.81l-.907.81m0 0h11.48m-11.48 0h11.48m-.907 6.141a.918.918 0 00.917-.917v-2.85h-11.5v2.85m10.583.917l-10.633-.917h.05m10.583.917h-9.666m9.666 0h-9.666m-.917-.917c0 .506.41.916.917.917m-.917-.917l.917.917m12.19-8.259l-1.526-3.968a1.506 1.506 0 00-1.947-.864l-.033.014-7.627 3.161a1.5 1.5 0 00-.833 1.918l.185.492h-.41a1.473 1.473 0 00-1.47 1.472v5.117c0 .812.658 1.471 1.47 1.472h9.667a1.474 1.474 0 001.472-1.472v-5.118c0-.066-.006-.132-.015-.198l.227-.092a1.511 1.511 0 00.84-1.934zm-9.565.6l-.276-.688 1.43-.715.276.688-1.43.715zm7.958 3.337h-11.5v-1.264h11.5v1.264z"
          stroke="#fff"
          strokeOpacity={0.7}
          strokeWidth={0.1}
        />
        <path
          d="M64.047 163.92c.424.246.947.246 1.37 0a1.365 1.365 0 100-2.36 1.365 1.365 0 00-1.37 2.36zm1.751-2.034a.89.89 0 01.302-.056.91.91 0 010 1.82.89.89 0 01-.302-.056 1.359 1.359 0 000-1.708zm-.38.259a.893.893 0 010 1.191.893.893 0 010-1.191zm-.683-.315c.104.001.206.02.302.056a1.358 1.358 0 000 1.708.891.891 0 01-.302.056.91.91 0 110-1.82z"
          fill="#fff"
          fillOpacity={0.7}
        />
        <path
          d="M66.1 161.325a1.416 1.416 0 00-.682.178 1.415 1.415 0 00-1.396 2.46c.43.251.961.256 1.396.015a1.415 1.415 0 10.682-2.653zm0 0v.05-.05zm0 2.275a.856.856 0 01-.22-.031 1.41 1.41 0 000-1.657.857.857 0 01.22-.032.86.86 0 010 1.72zm-.682-.342a.843.843 0 010-1.035.843.843 0 010 1.035zm-1.542-.518a.86.86 0 01.86-.86.857.857 0 01.219.032 1.41 1.41 0 000 1.657.86.86 0 01-1.079-.829z"
          stroke="#fff"
          strokeOpacity={0.7}
          strokeWidth={0.1}
        />
        <path
          d="M65.46 156.062l.185.416 2.17-.965-.185-.415-2.17.964z"
          fill="#fff"
          fillOpacity={0.7}
        />
        <path
          d="M65.44 156.017l-.046.02.02.046.185.415.02.046.046-.02 2.17-.965.046-.02-.02-.046-.186-.416-.02-.045-.046.02-2.17.965z"
          stroke="#fff"
          strokeOpacity={0.7}
          strokeWidth={0.1}
        />
        <path
          d="M67.145 154.135l-3.134 1.446.19.413 3.135-1.447-.19-.412z"
          fill="#fff"
          fillOpacity={0.7}
        />
        <path
          d="M67.19 154.114l-.02-.046-.046.021-3.134 1.447-.045.021.021.045.19.413.021.045.046-.021 3.134-1.446.045-.021-.02-.046-.191-.412z"
          stroke="#fff"
          strokeOpacity={0.7}
          strokeWidth={0.1}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.639 53.101a7.762 7.762 0 10-4.412 3.598l-3.295-3.295a4.208 4.208 0 01.937-8.31 4.207 4.207 0 014.063 5.3l2.707 2.707z"
          fill="#9B53C8"
        />
        <rect
          width={9.832}
          height={3.192}
          rx={1.596}
          transform="scale(-1 1) rotate(-45 32.382 113.884)"
          fill="#494947"
        />
        <rect
          x={95}
          y={46.093}
          width={39.463}
          height={3.036}
          rx={1.518}
          fill="#DFDFDF"
        />
        <rect
          x={145.847}
          y={46.093}
          width={39.463}
          height={3.036}
          rx={1.518}
          fill="#DFDFDF"
        />
        <rect
          x={196.693}
          y={46.093}
          width={39.463}
          height={3.036}
          rx={1.518}
          fill="#DFDFDF"
        />
        <g filter="url(#test-right_svg__d)">
          <g filter="url(#test-right_svg__e)">
            <rect
              x={102.159}
              y={153.856}
              width={220.841}
              height={30.356}
              rx={7.589}
              fill="#fff"
            />
          </g>
          <circle cx={121.511} cy={168.655} r={11.004} fill="#F1F1F1" />
          <path
            d="M116.159 173.651l4.262-9.562h2.185l4.276 9.562h-2.322l-3.497-8.442h.874l-3.511 8.442h-2.267zm2.131-2.049l.587-1.68h4.918l.601 1.68h-6.106z"
            fill="#9B53C8"
          />
          <rect
            x={143.14}
            y={160.687}
            width={169.995}
            height={3.036}
            rx={1.518}
            fill="#C7C7C7"
          />
          <rect
            x={143.14}
            y={167.517}
            width={169.995}
            height={3.036}
            rx={1.518}
            fill="#C7C7C7"
          />
          <rect
            x={143.14}
            y={174.347}
            width={169.995}
            height={3.036}
            rx={1.518}
            fill="#C7C7C7"
          />
        </g>
        <g filter="url(#test-right_svg__f)">
          <g filter="url(#test-right_svg__g)">
            <rect
              x={102.159}
              y={203.186}
              width={220.841}
              height={30.356}
              rx={7.589}
              fill="#9B53C8"
            />
          </g>
          <circle cx={121.511} cy={217.984} r={11.004} fill="#A58AF0" />
          <path
            d="M117.422 222.98v-9.562h4.672c1.202 0 2.104.227 2.705.683.61.455.915 1.056.915 1.803 0 .501-.123.938-.369 1.311a2.435 2.435 0 01-1.011.847c-.428.201-.92.301-1.475.301l.259-.56c.601 0 1.134.1 1.599.3.464.191.824.478 1.079.861.264.382.396.851.396 1.407 0 .819-.323 1.461-.97 1.926-.646.455-1.598.683-2.855.683h-4.945zm2.199-1.667h2.582c.574 0 1.006-.091 1.298-.273.3-.191.451-.492.451-.901 0-.401-.151-.697-.451-.888-.292-.201-.724-.301-1.298-.301h-2.746v-1.612h2.364c.537 0 .947-.091 1.229-.273.292-.191.437-.478.437-.861 0-.373-.145-.651-.437-.833-.282-.191-.692-.287-1.229-.287h-2.2v6.229z"
            fill="#fff"
          />
          <rect
            x={143.14}
            y={210.016}
            width={169.995}
            height={3.036}
            rx={1.518}
            fill="#fff"
          />
          <rect
            x={143.14}
            y={216.846}
            width={169.995}
            height={3.036}
            rx={1.518}
            fill="#fff"
          />
          <rect
            x={143.14}
            y={223.676}
            width={169.995}
            height={3.036}
            rx={1.518}
            fill="#fff"
          />
        </g>
        <g filter="url(#test-right_svg__h)">
          <g filter="url(#test-right_svg__i)">
            <rect
              x={102.159}
              y={252.515}
              width={220.841}
              height={30.356}
              rx={7.589}
              fill="#fff"
            />
          </g>
          <circle cx={121.511} cy={267.313} r={11.004} fill="#F1F1F1" />
          <path
            d="M122.212 272.473a5.871 5.871 0 01-2.063-.356 4.863 4.863 0 01-2.732-2.609 5.02 5.02 0 01-.383-1.981c0-.719.128-1.379.383-1.98a4.863 4.863 0 011.093-1.571 4.902 4.902 0 011.653-1.025 5.608 5.608 0 012.062-.369c.829 0 1.576.146 2.241.438a4.311 4.311 0 011.694 1.256l-1.421 1.312a3.246 3.246 0 00-1.093-.834 3.009 3.009 0 00-1.311-.286 3.35 3.35 0 00-1.23.218 2.793 2.793 0 00-.97.629 2.96 2.96 0 00-.642.969 3.411 3.411 0 00-.218 1.243c0 .456.073.87.218 1.244.155.373.369.696.642.969.274.274.597.483.97.629a3.35 3.35 0 001.23.218c.473 0 .91-.091 1.311-.273a3.335 3.335 0 001.093-.86l1.421 1.311a4.423 4.423 0 01-1.694 1.27c-.665.292-1.416.438-2.254.438z"
            fill="#9B53C8"
          />
          <rect
            x={143.14}
            y={259.345}
            width={169.995}
            height={3.036}
            rx={1.518}
            fill="#C7C7C7"
          />
          <rect
            x={143.14}
            y={266.175}
            width={169.995}
            height={3.036}
            rx={1.518}
            fill="#C7C7C7"
          />
          <rect
            x={143.14}
            y={273.005}
            width={169.995}
            height={3.036}
            rx={1.518}
            fill="#C7C7C7"
          />
        </g>
        <path
          d="M105.964 84.701a2.8 2.8 0 01-1.529-.424c-.447-.283-.799-.69-1.056-1.223-.249-.54-.374-1.18-.374-1.924 0-.743.125-1.381.374-1.914.257-.54.609-.95 1.056-1.233a2.8 2.8 0 011.529-.424c.573 0 1.082.141 1.53.424.447.283.795.694 1.045 1.233.257.533.385 1.17.385 1.914 0 .743-.128 1.385-.385 1.924-.25.533-.598.94-1.045 1.223a2.803 2.803 0 01-1.53.424zm0-1.351c.421 0 .75-.181.987-.543.243-.362.365-.92.365-1.677 0-.756-.122-1.315-.365-1.677-.237-.362-.566-.543-.987-.543-.414 0-.743.181-.986.543-.237.362-.355.92-.355 1.677 0 .756.118 1.315.355 1.677.243.362.572.543.986.543zm10.061-.217H114.9v1.45h-1.559v-1.45h-3.719v-1.076l3.255-4.38h1.678l-3.019 4.153h1.854v-1.292h1.51v1.293h1.125v1.302z"
          fill="#494947"
        />
        <rect
          x={95}
          y={103.769}
          width={168.477}
          height={3.795}
          rx={1.897}
          fill="#A0A0A0"
        />
        <rect
          x={95}
          y={113.635}
          width={155.575}
          height={3.795}
          rx={1.897}
          fill="#A0A0A0"
        />
        <rect
          x={95}
          y={123.501}
          width={129.014}
          height={3.795}
          rx={1.897}
          fill="#A0A0A0"
        />
        <rect
          x={130.238}
          y={73.413}
          width={137.362}
          height={5.312}
          rx={2.656}
          fill="#8C8C8C"
        />
        <rect
          x={130.238}
          y={82.519}
          width={89.551}
          height={5.312}
          rx={2.656}
          fill="#8C8C8C"
        />
        <defs>
          <filter
            id="test-right_svg__a"
            x={0.393}
            y={29.392}
            width={248.528}
            height={268.213}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation={1.23} />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_401_335"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation={12.303} />
            <feColorMatrix values="0 0 0 0 0.420833 0 0 0 0 0.346206 0 0 0 0 0.322639 0 0 0 0.46 0" />
            <feBlend
              in2="effect1_backgroundBlur_401_335"
              result="effect2_dropShadow_401_335"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_401_335"
              result="shape"
            />
          </filter>
          <filter
            id="test-right_svg__b"
            x={9.483}
            y={18.482}
            width={267.82}
            height={289.034}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation={1.326} />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_401_335"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation={13.258} />
            <feColorMatrix values="0 0 0 0 0.420833 0 0 0 0 0.346206 0 0 0 0 0.322639 0 0 0 0.46 0" />
            <feBlend
              in2="effect1_backgroundBlur_401_335"
              result="effect2_dropShadow_401_335"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_401_335"
              result="shape"
            />
          </filter>
          <filter
            id="test-right_svg__c"
            x={15.644}
            y={0.558}
            width={306.597}
            height={330.882}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation={1.518} />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_401_335"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation={15.178} />
            <feColorMatrix values="0 0 0 0 0.420833 0 0 0 0 0.346206 0 0 0 0 0.322639 0 0 0 0.46 0" />
            <feBlend
              in2="effect1_backgroundBlur_401_335"
              result="effect2_dropShadow_401_335"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_401_335"
              result="shape"
            />
          </filter>
          <filter
            id="test-right_svg__d"
            x={92.159}
            y={147.856}
            width={240.841}
            height={50.356}
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
            <feGaussianBlur stdDeviation={5} />
            <feColorMatrix values="0 0 0 0 0.1875 0 0 0 0 0.151406 0 0 0 0 0.135937 0 0 0 0.19 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_401_335"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_401_335"
              result="shape"
            />
          </filter>
          <filter
            id="test-right_svg__e"
            x={64.214}
            y={131.089}
            width={296.732}
            height={106.247}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={15.178} />
            <feGaussianBlur stdDeviation={18.973} />
            <feColorMatrix values="0 0 0 0 0.483606 0 0 0 0 0.337125 0 0 0 0 0.290867 0 0 0 0.22 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_401_335"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_401_335"
              result="shape"
            />
          </filter>
          <filter
            id="test-right_svg__f"
            x={92.159}
            y={197.186}
            width={240.841}
            height={50.356}
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
            <feGaussianBlur stdDeviation={5} />
            <feColorMatrix values="0 0 0 0 0.1875 0 0 0 0 0.151406 0 0 0 0 0.135937 0 0 0 0.19 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_401_335"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_401_335"
              result="shape"
            />
          </filter>
          <filter
            id="test-right_svg__g"
            x={64.214}
            y={180.418}
            width={296.732}
            height={106.247}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={15.178} />
            <feGaussianBlur stdDeviation={18.973} />
            <feColorMatrix values="0 0 0 0 0.483606 0 0 0 0 0.337125 0 0 0 0 0.290867 0 0 0 0.22 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_401_335"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_401_335"
              result="shape"
            />
          </filter>
          <filter
            id="test-right_svg__h"
            x={92.159}
            y={246.515}
            width={240.841}
            height={50.356}
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
            <feGaussianBlur stdDeviation={5} />
            <feColorMatrix values="0 0 0 0 0.1875 0 0 0 0 0.151406 0 0 0 0 0.135937 0 0 0 0.19 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_401_335"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_401_335"
              result="shape"
            />
          </filter>
          <filter
            id="test-right_svg__i"
            x={64.214}
            y={229.748}
            width={296.732}
            height={106.247}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={15.178} />
            <feGaussianBlur stdDeviation={18.973} />
            <feColorMatrix values="0 0 0 0 0.483606 0 0 0 0 0.337125 0 0 0 0 0.290867 0 0 0 0.22 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_401_335"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_401_335"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
);

TestRightIcon.displayName = "TestRightIcon";
