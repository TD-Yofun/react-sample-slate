import React from "react";
import { Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { Editor } from "slate";

import SlateTooltip from "../../../components/tooltip";

interface LinkButtonProps {
  editor: Editor;
}

const LinkButton: React.FC<LinkButtonProps> = () => {
  return (
    <>
      <SlateTooltip title="链接">
        <Button
          size="small"
          type="text"
          icon={<LinkOutlined></LinkOutlined>}
        ></Button>
      </SlateTooltip>
    </>
  );
};

export default LinkButton;
