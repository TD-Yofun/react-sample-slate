import React from "react";

import styles from "./style.module.scss";

interface LeafCodeProps {
  children?: React.ReactNode;
}

const LeafCode: React.FC<LeafCodeProps> = (props) => {
  const { children } = props;
  return <code className={styles["slate-leaf-code"]}>{children}</code>;
};

export default LeafCode;
