import React from "react";
import { RenderElementProps } from "slate-react";

import styles from "./style.module.scss";

interface ListUnorderProps extends RenderElementProps {}

const ListUnorder: React.FC<ListUnorderProps> = (props) => {
  const { attributes, children } = props;
  return (
    <ul className={styles["slate-list-unorder"]} {...attributes}>
      {children}
    </ul>
  );
};

export default ListUnorder;
