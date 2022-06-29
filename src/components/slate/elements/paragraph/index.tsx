import classNames from "classnames";
import React from "react";
import { RenderElementProps } from "slate-react";

import styles from "./style.module.scss";

interface ParagraphProps extends RenderElementProps {}

const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { children, attributes } = props;
  return (
    <p {...attributes} className={classNames(styles["slate-paragraph"])}>
      {children}
    </p>
  );
};

export default Paragraph;
