import React from "react";
import { RenderElementProps } from "slate-react";

import styles from "./style.module.scss";

interface ListItemProps extends RenderElementProps {}

const ListItem: React.FC<ListItemProps> = (props) => {
  const { attributes, children } = props;
  return (
    <li className={styles["slate-list-li"]} {...attributes}>
      {children}
    </li>
  );
};

export default ListItem;
