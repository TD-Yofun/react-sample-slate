import React, { useMemo, useState, useCallback, useEffect } from "react";
import classNames from "classnames";
import { createEditor, Descendant } from "slate";
import {
  Slate,
  Editable,
  withReact,
  RenderElementProps,
  RenderLeafProps,
} from "slate-react";
import { withHistory } from "slate-history";

// toolbar
import { Toolbar } from "./toolbar";

// plugins
import withLinks from "./plugins/withLinks";

// render
import { Element, Leaf } from "./render";

// type
import { ElementType } from "./types";

import "./style.scss";

interface SlateInputProps {}

const SlateInput: React.FC<SlateInputProps> = () => {
  const [focus, setFocus] = useState(false);

  const [value, setValue] = useState<Descendant[]>([
    {
      type: ElementType.PARAGRAPH,
      children: [{ text: "First line of text in Slate JS. " }],
    },
    {
      type: ElementType.LINK,
      href: "https://www.baidu.com",
      children: [{ text: "我是百度地址" }],
    },
    { type: ElementType.HEADING_ONE, children: [{ text: "我是标题1" }] },
    { type: ElementType.HEADING_TWO, children: [{ text: "我是标题2" }] },
    { type: ElementType.HEADING_THREE, children: [{ text: "我是标题3" }] },
    { type: ElementType.HEADING_FOUR, children: [{ text: "我是标题4" }] },
    { type: ElementType.HEADING_FIVE, children: [{ text: "我是标题5" }] },
    { type: ElementType.HEADING_SIX, children: [{ text: "我是标题6" }] },
  ]);

  const editor = useMemo(
    () => withHistory(withLinks(withReact(createEditor()))),
    []
  );

  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    []
  );

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Toolbar style={{ marginBottom: "10px" }} />
      <Editable
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder="请输入内容"
        className={classNames("slate-input", {
          "is-focus": focus,
        })}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
      />
    </Slate>
  );
};

export default SlateInput;
