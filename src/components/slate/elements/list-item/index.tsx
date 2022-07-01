import React from "react";
import { RenderElementProps } from "slate-react";
import { useAlignStyleEffect } from "../../hooks";

import styles from "./style.module.scss";

interface ListItemProps extends RenderElementProps {}

const ListItem: React.FC<ListItemProps> = (props) => {
  const { attributes, children, element } = props;
  const alignStyle = useAlignStyleEffect(element.align);
  return (
    <li
      className={styles["slate-list-li"]}
      {...attributes}
      style={{ ...alignStyle }}
    >
      {children}
    </li>
  );
};

export default ListItem;
