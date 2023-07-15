import * as React from "react";
import { SVGAttributes } from "react";

export const MegaphoneIcon = React.memo(
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
          d="M16.646 10.165l-4.34-4.34a1.152 1.152 0 00-1.769 1.458l-.006.03a8.03 8.03 0 01-2.203 4.117l-1.99 1.99a1.15 1.15 0 000 1.628l1.084 1.085c.45.45 1.178.45 1.628 0l.271-.271 1.9 1.899a1.15 1.15 0 101.627-1.628l-.814-.814.271-.271a1.15 1.15 0 000-1.628l-.184-.184a8.03 8.03 0 013.037-1.297l.03-.006a1.152 1.152 0 001.458-.14 1.152 1.152 0 000-1.628zm-8.138 5.426a.383.383 0 01-.543 0L6.88 14.506a.383.383 0 010-.543l1.899-1.899 1.627 1.628-1.898 1.899zm3.797 1.085a.384.384 0 01-.542.542l-1.9-1.899.543-.542 1.9 1.899zm-1.356-2.442c.115-.115.288-.292.56-.524l.254.253c.15.15.15.393 0 .543l-.271.27-.543-.542zm.016-1.069l-1.66-1.66a8.786 8.786 0 001.868-3.557l3.35 3.35a8.785 8.785 0 00-3.558 1.867zm5.138-1.915a.383.383 0 01-.542 0l-4.34-4.34a.383.383 0 11.542-.543l4.34 4.34c.15.15.15.394 0 .543z"
          fill="#EE52FC"
        />
        <path
          d="M9.05 13.421a.383.383 0 00-.543 0l-.542.543a.384.384 0 10.542.542l.543-.543a.384.384 0 000-.542zM14.067 5a.384.384 0 00-.384.384v.767a.384.384 0 00.768 0v-.767A.384.384 0 0014.067 5zm3.07 3.069h-.768a.384.384 0 100 .767h.768a.384.384 0 100-.767zm-.496-2.189a.384.384 0 00-.543 0l-.767.767a.384.384 0 00.543.542l.767-.767a.384.384 0 000-.543z"
          fill="#EE52FC"
        />
      </svg>
    );
  }
);
