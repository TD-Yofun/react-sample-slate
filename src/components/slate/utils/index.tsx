import { Editor, Element as SlateElement } from "slate";
import { ElementType } from "../types";

export const isBlockActive = (editor: Editor, format: ElementType) => {
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  });
  return !!match;
};
