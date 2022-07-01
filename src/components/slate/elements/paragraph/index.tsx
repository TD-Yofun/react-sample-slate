import classNames from "classnames";
import React from "react";
import { RenderElementProps } from "slate-react";
import { useAlignStyleEffect } from "../../hooks";

import styles from "./style.module.scss";

interface ParagraphProps extends RenderElementProps {}

const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { children, attributes, element } = props;
  const alignStyle = useAlignStyleEffect(element.align);
  return (
    <p
      {...attributes}
      className={classNames(styles["slate-paragraph"])}
      style={{ ...alignStyle }}
    >
      {children}
    </p>
  );
};

export default Paragraph;
