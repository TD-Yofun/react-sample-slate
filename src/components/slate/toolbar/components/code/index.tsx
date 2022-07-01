import React from "react";
import classNames from "classnames";
import { Button } from "antd";
import { CodeOutlined } from "@ant-design/icons";
import { Editor } from "slate";
import SlateTooltip from "../../../components/tooltip";
import { isMarkActive, toggleMark } from "../../../utils";
import { StyleType } from "../../../types";

interface CodeButtonProps {
  editor: Editor;
}

const CodeButton: React.FC<CodeButtonProps> = ({ editor }) => {
  return (
    <>
      <SlateTooltip title="代码块">
        <Button
          size="small"
          type="text"
          className={classNames({
            "is-active": isMarkActive(editor, StyleType.CODE),
          })}
          icon={<CodeOutlined></CodeOutlined>}
          onMouseDown={(e) => {
            e.preventDefault();
            toggleMark(editor, StyleType.CODE);
          }}
        ></Button>
      </SlateTooltip>
    </>
  );
};

export default CodeButton;
