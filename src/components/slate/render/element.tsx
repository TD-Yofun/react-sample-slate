import React from "react";
import { RenderElementProps } from "slate-react";

// element
import Paragraph from "../elements/paragraph";
import { Link } from "../elements/link";
import { Heading } from "../elements/heading";

import { ElementType } from "../types";

interface ElementProps extends RenderElementProps {}

const Element: React.FC<ElementProps> = (props) => {
  let { element } = props;
  const elementType = element.type as ElementType;
  switch (elementType) {
    case ElementType.LINK:
      return <Link {...props} />;
    case ElementType.HEADING:
      return <Heading {...props} />;
    default:
      return <Paragraph {...props} />;
  }
};

export default Element;
