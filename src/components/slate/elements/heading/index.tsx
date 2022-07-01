import classNames from "classnames";
import React from "react";
import { RenderElementProps } from "slate-react";
import { useAlignStyleEffect } from "../../hooks";
import { HeadingElement, ElementType } from "../../types";

import styles from "./style.module.scss";

interface HeadingProps extends RenderElementProps {}

const heads = {
  [ElementType.HEADING_ONE]: 1,
  [ElementType.HEADING_TWO]: 2,
  [ElementType.HEADING_THREE]: 3,
  [ElementType.HEADING_FOUR]: 4,
  [ElementType.HEADING_FIVE]: 5,
  [ElementType.HEADING_SIX]: 6,
};

const Heading: React.FC<HeadingProps> = (props) => {
  const { attributes, children, element } = props;
  const el = element as HeadingElement;
  const alignStyle = useAlignStyleEffect(element.align);
  return React.createElement(
    `h${heads[el.type]}`,
    {
      className: classNames(styles["slate-heading"]),
      ...attributes,
      style: { ...alignStyle },
    },
    children
  );
};

export default Heading;
