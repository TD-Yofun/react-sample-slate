import { Editor, Element as SlateElement } from "slate";
import { ElementType } from "../types";

// export const isBlockActive = (editor: Editor, format, blockType = 'type') => {
//   const { selection } = editor
//   if (!selection) return false

//   const [match] = Array.from(
//     Editor.nodes(editor, {
//       at: Editor.unhangRange(editor, selection),
//       match: n =>
//         !Editor.isEditor(n) &&
//         SlateElement.isElement(n) &&
//         n[blockType] === format,
//     })
//   )

//   return !!match
// }

// export const toggleBlock = (editor: Editor, format: ElementType) => {
//   const isActive = isBlockActive(
//     editor,
//     format,
//     TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
//   );
//   const isList = LIST_TYPES.includes(format);

//   Transforms.unwrapNodes(editor, {
//     match: (n) =>
//       !Editor.isEditor(n) &&
//       SlateElement.isElement(n) &&
//       LIST_TYPES.includes(n.type) &&
//       !TEXT_ALIGN_TYPES.includes(format),
//     split: true,
//   });
//   let newProperties: Partial<SlateElement>;
//   if (TEXT_ALIGN_TYPES.includes(format)) {
//     newProperties = {
//       align: isActive ? undefined : format,
//     };
//   } else {
//     newProperties = {
//       type: isActive ? "paragraph" : isList ? "list-item" : format,
//     };
//   }
//   Transforms.setNodes<SlateElement>(editor, newProperties);

//   if (!isActive && isList) {
//     const block = { type: format, children: [] };
//     Transforms.wrapNodes(editor, block);
//   }
// };
