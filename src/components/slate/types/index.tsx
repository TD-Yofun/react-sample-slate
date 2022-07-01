
export enum ElementType {
  HEADING_ONE = "HEADING_ONE",
  HEADING_TWO = "HEADING_TWO",
  HEADING_THREE = "HEADING_THREE",
  HEADING_FOUR = "HEADING_FOUR",
  HEADING_FIVE = "HEADING_FIVE",
  HEADING_SIX = "HEADING_SIX",
  PARAGRAPH = "PARAGRAPH",
  LIST_ORDER = "LIST_ORDER",
  LIST_UNORDER = "LIST_UNORDER",
  LIST_ITEM = "LIST_ITEM",
  LINK = "LINK",
}

export enum AlignType {
  LEFT = "LEFT",
  CENTER = "CENTER",
  RIGHT = "RIGHT",
}

export enum StyleType {
  BOLD = "BOLD",
  ITALIC = "ITALIC",
  UNDERLINE = "UNDERLINE",
  THROUGH = "THROUGH",
  CODE = "CODE",
}

export type FormatBlockType = ElementType | AlignType;

export type FormatMarkType = StyleType;

interface BaseElement {
  align?: AlignType;
}

export interface ParagraphElement extends BaseElement {
  type: ElementType.PARAGRAPH;
  children: CustomText[];
}

export interface HeadingElement extends BaseElement {
  type:
    | ElementType.HEADING_ONE
    | ElementType.HEADING_TWO
    | ElementType.HEADING_THREE
    | ElementType.HEADING_FOUR
    | ElementType.HEADING_FIVE
    | ElementType.HEADING_SIX;
  children: CustomText[];
}

export interface LinkElement extends BaseElement {
  type: ElementType.LINK;
  href?: string;
  children: CustomText[];
}

export interface ListElement extends BaseElement {
  type:
    | ElementType.LIST_ORDER
    | ElementType.LIST_UNORDER
    | ElementType.LIST_ITEM;
  children: CustomText[];
}

export type CustomElement =
  | ParagraphElement
  | HeadingElement
  | LinkElement
  | ListElement;

export interface FormattedText {
  text: string;
}

export type CustomText = FormattedText & Partial<Record<StyleType, boolean>>;
