import React from "react";
import classNames from "classnames";
import { Button } from "antd";
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
} from "@ant-design/icons";
import { Editor } from "slate";

import SlateTooltip from "../../../components/tooltip";
import { isMarkActive, toggleMark } from "../../../utils";
import { StyleType } from "../../../types";

interface StyleButtonProps {
  editor: Editor;
}

const StyleButton: React.FC<StyleButtonProps> = ({ editor }) => {
  const handleClick = (format: StyleType) => {
    toggleMark(editor, format);
  };

  return (
    <>
      <SlateTooltip title="加粗">
        <Button
          size="small"
          type="text"
          className={classNames({
            "is-active": isMarkActive(editor, StyleType.BOLD),
          })}
          icon={<BoldOutlined></BoldOutlined>}
          onMouseDown={(e) => {
            e.preventDefault();
            handleClick(StyleType.BOLD);
          }}
        ></Button>
      </SlateTooltip>
      <SlateTooltip title="斜体">
        <Button
          size="small"
          type="text"
          className={classNames({
            "is-active": isMarkActive(editor, StyleType.ITALIC),
          })}
          icon={<ItalicOutlined></ItalicOutlined>}
          onMouseDown={(e) => {
            e.preventDefault();
            handleClick(StyleType.ITALIC);
          }}
        ></Button>
      </SlateTooltip>
      <SlateTooltip title="下划线">
        <Button
          size="small"
          type="text"
          className={classNames({
            "is-active": isMarkActive(editor, StyleType.UNDERLINE),
          })}
          icon={<UnderlineOutlined></UnderlineOutlined>}
          onMouseDown={(e) => {
            e.preventDefault();
            handleClick(StyleType.UNDERLINE);
          }}
        ></Button>
      </SlateTooltip>
      <SlateTooltip title="中划线">
        <Button
          size="small"
          type="text"
          className={classNames({
            "is-active": isMarkActive(editor, StyleType.THROUGH),
          })}
          icon={<StrikethroughOutlined></StrikethroughOutlined>}
          onMouseDown={(e) => {
            e.preventDefault();
            handleClick(StyleType.THROUGH);
          }}
        ></Button>
      </SlateTooltip>
    </>
  );
};

export default StyleButton;
