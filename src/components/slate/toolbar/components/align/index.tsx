import React from "react";
import { Button } from "antd";
import {
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
} from "@ant-design/icons";
import { Editor } from "slate";

import SlateTooltip from "../../../components/tooltip";

export const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

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
          icon={<AlignLeftOutlined></AlignLeftOutlined>}
        ></Button>
      </SlateTooltip>
      <SlateTooltip title="中对齐">
        <Button
          size="small"
          type="text"
          icon={<AlignCenterOutlined></AlignCenterOutlined>}
        ></Button>
      </SlateTooltip>
      <SlateTooltip title="右对齐">
        <Button
          size="small"
          type="text"
          icon={<AlignRightOutlined></AlignRightOutlined>}
        ></Button>
      </SlateTooltip>
    </>
  );
};

export default AlignButton;
