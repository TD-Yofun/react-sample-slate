import React from "react";
import { Button } from "antd";
import { OrderedListOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Editor } from "slate";

import SlateTooltip from "../../../components/tooltip";

interface ListButtonProps {
  editor: Editor;
}

export const LIST_TYPES = ["numbered-list", "bulleted-list"];

const ListButton: React.FC<ListButtonProps> = () => {
  return (
    <>
      <SlateTooltip title="有序列表">
        <Button
          size="small"
          type="text"
          icon={<OrderedListOutlined></OrderedListOutlined>}
        ></Button>
      </SlateTooltip>
      <SlateTooltip title="无序列表">
        <Button
          size="small"
          type="text"
          icon={<UnorderedListOutlined></UnorderedListOutlined>}
        ></Button>
      </SlateTooltip>
    </>
  );
};

export default ListButton;
