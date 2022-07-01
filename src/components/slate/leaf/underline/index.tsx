import React from "react";

import styles from "./style.module.scss";

interface LeafUnderlineProps {
  children?: React.ReactNode;
}

const LeafUnderline: React.FC<LeafUnderlineProps> = (props) => {
  const { children } = props;
  return <u className={styles["slate-leaf-underline"]}>{children}</u>;
};

export default LeafUnderline;
