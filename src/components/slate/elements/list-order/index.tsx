import React from "react";
import { RenderElementProps } from "slate-react";

import styles from "./style.module.scss";

interface ListOrderProps extends RenderElementProps {}

const ListOrder: React.FC<ListOrderProps> = (props) => {
  const { attributes, children } = props;
  return (
    <ol className={styles["slate-list-order"]} {...attributes}>
      {children}
    </ol>
  );
};

export default ListOrder;
