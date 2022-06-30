import React from "react";
import { Tooltip, TooltipProps } from "antd";

import styles from "./style.module.scss";

interface SlateTooltipProps {
  title: string;
  trigger?: TooltipProps["trigger"];
  children?: React.ReactNode;
}

const SlateTooltip: React.FC<SlateTooltipProps> = ({
  title,
  children,
  trigger,
}) => {
  return (
    <Tooltip
      title={title}
      overlayClassName={styles["slate-tooltip"]}
      trigger={trigger}
    >
      {children}
    </Tooltip>
  );
};

export default SlateTooltip;
