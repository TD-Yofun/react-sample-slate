import classNames from "classnames";
import React from "react";
import { RenderElementProps } from "slate-react";
import { HeadingElement } from "../../types";

import styles from "./style.module.scss";

interface HeadingProps extends RenderElementProps {}

const Heading: React.FC<HeadingProps> = (props) => {
  const { attributes, children, element } = props;
  const el = element as HeadingElement;
  return React.createElement(
    `h${el.level}`,
    { className: classNames(styles["slate-heading"]), ...props },
    children
  );
};

export default Heading;
