import React from "react";
import classNames from "classnames";
import { Button } from "antd";
import {
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
} from "@ant-design/icons";
import { Editor } from "slate";
import { AlignType } from "../../../types";

import SlateTooltip from "../../../components/tooltip";
import { isBlockActive, toggleBlock } from "../../../utils";

export const TEXT_ALIGN_TYPES = [
  AlignType.LEFT,
  AlignType.CENTER,
  AlignType.RIGHT,
];

interface AlignButtonProps {
  editor: Editor;
}

const AlignButton: React.FC<AlignButtonProps> = ({ editor }) => {
  return (
    <>
      <SlateTooltip title="左对齐">
        <Button
          size="small"
          type="text"
          className={classNames({
            "is-active": isBlockActive(editor, AlignType.LEFT, "align"),
          })}
          icon={<AlignLeftOutlined></AlignLeftOutlined>}
          onMouseDown={(e) => {
            e.preventDefault();
            toggleBlock(editor, AlignType.LEFT);
          }}
        ></Button>
      </SlateTooltip>
      <SlateTooltip title="中对齐">
        <Button
          size="small"
          type="text"
          className={classNames({
            "is-active": isBlockActive(editor, AlignType.CENTER, "align"),
          })}
          icon={<AlignCenterOutlined></AlignCenterOutlined>}
          onMouseDown={(e) => {
            e.preventDefault();
            toggleBlock(editor, AlignType.CENTER);
          }}
        ></Button>
      </SlateTooltip>
      <SlateTooltip title="右对齐">
        <Button
          size="small"
          type="text"
          className={classNames({
            "is-active": isBlockActive(editor, AlignType.RIGHT, "align"),
          })}
          icon={<AlignRightOutlined></AlignRightOutlined>}
          onMouseDown={(e) => {
            e.preventDefault();
            toggleBlock(editor, AlignType.RIGHT);
          }}
        ></Button>
      </SlateTooltip>
    </>
  );
};

export default AlignButton;
