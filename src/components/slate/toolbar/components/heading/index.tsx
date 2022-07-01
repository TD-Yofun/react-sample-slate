import React, { useMemo, useCallback } from "react";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { Editor, Element as SlateElement } from "slate";

import SlateTooltip from "../../../components/tooltip";

import styles from "./style.module.scss";
import { ElementType, HeadingElement } from "../../../types";
import { isBlockActive, toggleBlock } from "../../../utils";

interface HeadingButtonProps {
  editor: Editor;
}

const headingConfig = {
  [`${ElementType.HEADING_ONE}`]: `标题 1`,
  [`${ElementType.HEADING_TWO}`]: `标题 2`,
  [`${ElementType.HEADING_THREE}`]: `标题 3`,
  [`${ElementType.HEADING_FOUR}`]: `标题 4`,
  [`${ElementType.HEADING_FIVE}`]: `标题 5`,
  [`${ElementType.HEADING_SIX}`]: `标题 6`,
  [`${ElementType.PARAGRAPH}`]: `普通文本`,
};

const HeadingButton: React.FC<HeadingButtonProps> = ({ editor }) => {
  const handleClickMenu = useCallback(
    (format: ElementType) => {
      toggleBlock(editor, format);
    },
    [editor]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCurrentKey = () => {
    if (isBlockActive(editor, ElementType.HEADING_ONE)) {
      return `${ElementType.HEADING_ONE}`;
    } else if (isBlockActive(editor, ElementType.HEADING_TWO)) {
      return `${ElementType.HEADING_TWO}`;
    } else if (isBlockActive(editor, ElementType.HEADING_THREE)) {
      return `${ElementType.HEADING_THREE}`;
    } else if (isBlockActive(editor, ElementType.HEADING_FOUR)) {
      return `${ElementType.HEADING_FOUR}`;
    } else if (isBlockActive(editor, ElementType.HEADING_FIVE)) {
      return `${ElementType.HEADING_FIVE}`;
    } else if (isBlockActive(editor, ElementType.HEADING_SIX)) {
      return `${ElementType.HEADING_SIX}`;
    } else {
      return `${ElementType.PARAGRAPH}`;
    }
  };

  const menu = useMemo(
    () => (
      <Menu className={styles["dropdown-content"]} activeKey={getCurrentKey()}>
        <Menu.Item
          onMouseDown={(e) => {
            e.preventDefault();
            handleClickMenu(ElementType.HEADING_ONE);
          }}
          key={`${ElementType.HEADING_ONE}`}
        >
          <h1>{headingConfig[`${ElementType.HEADING_ONE}`]}</h1>
        </Menu.Item>
        <Menu.Item
          onMouseDown={(e) => {
            e.preventDefault();
            handleClickMenu(ElementType.HEADING_TWO);
          }}
          key={`${ElementType.HEADING_TWO}`}
        >
          <h2>{headingConfig[`${ElementType.HEADING_TWO}`]}</h2>
        </Menu.Item>
        <Menu.Item
          onMouseDown={(e) => {
            e.preventDefault();
            handleClickMenu(ElementType.HEADING_THREE);
          }}
          key={`${ElementType.HEADING_THREE}`}
        >
          <h3>{headingConfig[`${ElementType.HEADING_THREE}`]}</h3>
        </Menu.Item>
        <Menu.Item
          onMouseDown={(e) => {
            e.preventDefault();
            handleClickMenu(ElementType.HEADING_FOUR);
          }}
          key={`${ElementType.HEADING_FOUR}`}
        >
          <h4>{headingConfig[`${ElementType.HEADING_FOUR}`]}</h4>
        </Menu.Item>
        <Menu.Item
          onMouseDown={(e) => {
            e.preventDefault();
            handleClickMenu(ElementType.HEADING_FIVE);
          }}
          key={`${ElementType.HEADING_FIVE}`}
        >
          <h5>{headingConfig[`${ElementType.HEADING_FIVE}`]}</h5>
        </Menu.Item>
        <Menu.Item
          onMouseDown={(e) => {
            e.preventDefault();
            handleClickMenu(ElementType.HEADING_SIX);
          }}
          key={`${ElementType.HEADING_SIX}`}
        >
          <h6>{headingConfig[`${ElementType.HEADING_SIX}`]}</h6>
        </Menu.Item>
        <Menu.Item
          onMouseDown={(e) => {
            e.preventDefault();
            handleClickMenu(ElementType.PARAGRAPH);
          }}
          key={`${ElementType.PARAGRAPH}`}
        >
          {headingConfig[`${ElementType.PARAGRAPH}`]}
        </Menu.Item>
      </Menu>
    ),
    [getCurrentKey, handleClickMenu]
  );

  return (
    <SlateTooltip title="文本样式">
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button
          size="small"
          type="text"
          style={{ width: "100px" }}
          onMouseDown={(e) => e.preventDefault()}
        >
          {headingConfig[getCurrentKey()]}
          <DownOutlined />
        </Button>
      </Dropdown>
    </SlateTooltip>
  );
};

export default HeadingButton;
