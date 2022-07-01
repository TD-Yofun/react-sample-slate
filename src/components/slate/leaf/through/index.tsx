import React from "react";

import styles from "./style.module.scss";

interface LeafThroughProps {
  children?: React.ReactNode;
}

const LeafThrough: React.FC<LeafThroughProps> = (props) => {
  const { children } = props;
  return <span className={styles["slate-leaf-through"]}>{children}</span>;
};

export default LeafThrough;
