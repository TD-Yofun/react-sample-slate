import { Editor, Transforms, Path, Range, Element } from "slate";
import { ElementType, LinkElement } from "../types";

export const createLinkNode = (href: string, text: string) => ({
  type: ElementType.LINK,
  href,
  children: [{ text }],
});

// export const insertLink = (editor: Editor, url: string) => {
//   if (!url) return;

//   const { selection } = editor;
//   const link: LinkElement = createLinkNode(url, "Link");
//   if (!!selection) {
//     const [parent, parentPath] = Editor.parent(editor, selection.focus.path);
//     if (parent.type === "link") {
//       removeLink(editor);
//     }

//     //for image nodes, will be implemented later
//     if (editor.isVoid(parent)) {
//       Transforms.insertNodes(
//         editor,
//         { type: "paragraph", children: [link] },
//         {
//           at: Path.next(parentPath),
//           select: true,
//         }
//       );
//     } else if (Range.isCollapsed(selection)) {
//       Transforms.insertNodes(editor, link, { select: true });
//     } else {
//       Transforms.wrapNodes(editor, link, { split: true });
//     }
//   } else {
//     Transforms.insertNodes(editor, { type: "paragraph", children: [link] });
//   }
// };

export const removeLink = (editor: Editor) => {
  Transforms.unwrapNodes(editor, {
    match: (n) => {
      return (
        !Editor.isEditor(n) &&
        Element.isElement(n) &&
        n.type === ElementType.LINK
      );
    },
  });
};
