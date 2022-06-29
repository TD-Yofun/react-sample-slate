import { ReactEditor } from "slate-react";
import { ElementType } from "../types";

const withLinks = (editor: ReactEditor) => {
  const { isInline } = editor;
  editor.isInline = (element) =>
    element.type === ElementType.LINK ? true : isInline(element);
  return editor;
};

export default withLinks;
