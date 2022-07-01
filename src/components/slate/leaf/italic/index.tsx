import React from "react";

import styles from "./style.module.scss";

interface LeafItalicProps {
  children?: React.ReactNode;
}

const LeafItalic: React.FC<LeafItalicProps> = (props) => {
  const { children } = props;
  return <em className={styles["slate-leaf-italic"]}>{children}</em>;
};

export default LeafItalic;
