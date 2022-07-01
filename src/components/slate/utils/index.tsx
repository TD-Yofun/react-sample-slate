import { Editor, Element as SlateElement, Transforms } from "slate";
import { ReactEditor } from "slate-react";

import { TEXT_ALIGN_TYPES } from "../toolbar/components/align";
import { LIST_TYPES } from "../toolbar/components/list";
import {
  AlignType,
  ElementType,
  FormatBlockType,
  ListElement,
  FormatMarkType,
} from "../types";

export const isBlockActive = (
  editor: Editor,
  format: FormatBlockType,
  blockType: "type" | "align" = "type"
) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  );
  return !!match;
};

export const toggleBlock = (editor: Editor, format: FormatBlockType) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format as AlignType) ? "align" : "type"
  );
  const isList = LIST_TYPES.includes(format as ElementType);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format as AlignType),
    split: true,
  });
  let newProperties: Partial<SlateElement>;
  if (TEXT_ALIGN_TYPES.includes(format as AlignType)) {
    newProperties = {
      align: isActive ? undefined : (format as AlignType),
    };
  } else {
    newProperties = {
      type: isActive
        ? ElementType.PARAGRAPH
        : isList
        ? ElementType.LIST_ITEM
        : (format as ElementType),
    };
  }
  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format as ListElement["type"], children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

export const isMarkActive = (editor: Editor, format: FormatMarkType) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const toggleMark = (editor: Editor, format: FormatMarkType) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
  ReactEditor.focus(editor);
};
