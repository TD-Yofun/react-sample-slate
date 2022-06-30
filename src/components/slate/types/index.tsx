export enum ElementType {
  PARAGRAPH = "PARAGRAPH",
  LINK = "LINK",
  HEADING = "HEADING",
  LIST_ORDER = "LIST_ORDER",
  LIST_UNORDER = "LIST_UNORDER",
  LIST_ITEM = "HEADING",
}

export type ParagraphElement = {
  type: ElementType.PARAGRAPH;
  children: CustomText[];
};

export type HeadingElement = {
  type: ElementType.HEADING;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: CustomText[];
};

export type LinkElement = {
  type: ElementType.LINK;
  href?: string;
  children: CustomText[];
};

// export type ListElement = {
//   type: 
// }

export type CustomElement = ParagraphElement | HeadingElement | LinkElement;

export type FormattedText = { text: string; bold?: true };

export type CustomText = FormattedText;
