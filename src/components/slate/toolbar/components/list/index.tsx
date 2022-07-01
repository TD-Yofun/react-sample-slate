import React from "react";
import classNames from "classnames";
import { Button } from "antd";
import { OrderedListOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Editor } from "slate";

import SlateTooltip from "../../../components/tooltip";
import { ElementType } from "../../../types";
import { isBlockActive, toggleBlock } from "../../../utils";

interface ListButtonProps {
  editor: Editor;
}

export const LIST_TYPES = [ElementType.LIST_ORDER, ElementType.LIST_UNORDER];

const ListButton: React.FC<ListButtonProps> = ({ editor }) => {
  const handleClickOrder = () => {
    toggleBlock(editor, ElementType.LIST_ORDER);
  };

  const handleClickUnorder = () => {
    toggleBlock(editor, ElementType.LIST_UNORDER);
  };

  return (
    <>
      <SlateTooltip title="有序列表">
        <Button
          size="small"
          type="text"
          className={classNames({
            "is-active": isBlockActive(editor, ElementType.LIST_ORDER),
          })}
          icon={<OrderedListOutlined></OrderedListOutlined>}
          onMouseDown={(e) => {
            e.preventDefault();
            handleClickOrder();
          }}
        ></Button>
      </SlateTooltip>
      <SlateTooltip title="无序列表">
        <Button
          size="small"
          type="text"
          className={classNames({
            "is-active": isBlockActive(editor, ElementType.LIST_UNORDER),
          })}
          icon={<UnorderedListOutlined></UnorderedListOutlined>}
          onMouseDown={(e) => {
            e.preventDefault();
            handleClickUnorder();
          }}
        ></Button>
      </SlateTooltip>
    </>
  );
};

export default ListButton;
