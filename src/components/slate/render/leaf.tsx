import React from "react";
import { RenderLeafProps } from "slate-react";

import LeafBold from "../leaf/bold";
import LeafItalic from "../leaf/italic";
import LeafThrough from "../leaf/through";
import LeafUnderline from "../leaf/underline";
import LeafCode from "../leaf/code";

interface LeafProps extends RenderLeafProps {}

const Leaf: React.FC<LeafProps> = ({ leaf, children, attributes }) => {
  if (leaf.CODE) {
    children = <LeafCode>{children}</LeafCode>;
  }
  if (leaf.BOLD) {
    children = <LeafBold>{children}</LeafBold>;
  }
  if (leaf.ITALIC) {
    children = <LeafItalic>{children}</LeafItalic>;
  }
  if (leaf.THROUGH) {
    children = <LeafThrough>{children}</LeafThrough>;
  }
  if (leaf.UNDERLINE) {
    children = <LeafUnderline>{children}</LeafUnderline>;
  }
  return <span {...attributes}>{children}</span>;
};

export default Leaf;
