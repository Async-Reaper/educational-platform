import React, { useEffect, useState } from "react";
import { ColoredIcon } from "shared/libs/icons";
import cls from "./styles.module.scss";

const Component = () => {
  const [widthIcon, setWidthIcon] = useState(window.innerWidth);

  useEffect(() => {
    setWidthIcon(window.innerWidth);
  }, [window.innerWidth, widthIcon]);

  return (
    <div className={cls.bottom__icon}>
      <ColoredIcon name="wave" width={widthIcon} height={731} />
    </div>
  );
};

export const BottomIcon = React.memo(Component);
