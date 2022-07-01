import React from "react";
import { RenderElementProps } from "slate-react";

// element
import Paragraph from "../elements/paragraph";
import Link from "../elements/link";
import Heading from "../elements/heading";
import ListOrder from "../elements/list-order";
import ListUnorder from "../elements/list-unorder";
import ListItem from "../elements/list-item";

import { ElementType } from "../types";

interface ElementProps extends RenderElementProps {}

const Element: React.FC<ElementProps> = (props) => {
  let { element } = props;
  const elementType = element.type as ElementType;
  switch (elementType) {
    case ElementType.LINK:
      return <Link {...props} />;
    case ElementType.HEADING_ONE:
    case ElementType.HEADING_TWO:
    case ElementType.HEADING_THREE:
    case ElementType.HEADING_FOUR:
    case ElementType.HEADING_FIVE:
    case ElementType.HEADING_SIX:
      return <Heading {...props} />;
    case ElementType.LIST_ITEM:
      return <ListItem {...props} />;
    case ElementType.LIST_ORDER:
      return <ListOrder {...props} />;
    case ElementType.LIST_UNORDER:
      return <ListUnorder {...props} />;
    default:
      return <Paragraph {...props} />;
  }
};

export default Element;
