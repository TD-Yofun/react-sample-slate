import React from "react";

import styles from "./style.module.scss";

interface LeafBoldProps {
  children?: React.ReactNode;
}

const LeafBold: React.FC<LeafBoldProps> = (props) => {
  const { children } = props;
  return <strong className={styles["slate-leaf-bold"]}>{children}</strong>;
};

export default LeafBold;
