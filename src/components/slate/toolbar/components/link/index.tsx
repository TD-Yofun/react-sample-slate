import React from "react";
import classNames from "classnames";
import { Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { Editor } from "slate";

import SlateTooltip from "../../../components/tooltip";
import { isBlockActive } from "../../../utils";
import { ElementType } from "../../../types";

interface LinkButtonProps {
  editor: Editor;
}

const LinkButton: React.FC<LinkButtonProps> = ({ editor }) => {
  return (
    <>
      <SlateTooltip title="链接">
        <Button
          size="small"
          type="text"
          className={classNames({
            "is-active": isBlockActive(editor, ElementType.LINK),
          })}
          icon={<LinkOutlined></LinkOutlined>}
        ></Button>
      </SlateTooltip>
    </>
  );
};

export default LinkButton;
