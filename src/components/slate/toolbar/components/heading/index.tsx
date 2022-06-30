import React, { useMemo, useCallback } from "react";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { Editor, Element as SlateElement } from "slate";

import SlateTooltip from "../../../components/tooltip";

import styles from "./style.module.scss";
import { ElementType, HeadingElement } from "../../../types";

interface HeadingButtonProps {
  editor: Editor;
}

const headingConfig = {
  [`${ElementType.HEADING}-1`]: `标题 1`,
  [`${ElementType.HEADING}-2`]: `标题 2`,
  [`${ElementType.HEADING}-3`]: `标题 3`,
  [`${ElementType.HEADING}-4`]: `标题 4`,
  [`${ElementType.HEADING}-5`]: `标题 5`,
  [`${ElementType.HEADING}-6`]: `标题 6`,
  [`${ElementType.PARAGRAPH}`]: `普通文本`,
};

const isBlockActive = (
  editor: Editor,
  format: ElementType,
  level?: HeadingElement["level"]
) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => {
      if (level) {
        return (
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === format &&
          // @ts-ignore
          n.level === level
        );
      }
      return (
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format
      );
    },
  });
  return !!match;
};

const HeadingButton: React.FC<HeadingButtonProps> = ({ editor }) => {
  const handleClickMenu = (
    format: ElementType,
    level?: HeadingElement["level"]
  ) => {};

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCurrentKey = () => {
    if (isBlockActive(editor, ElementType.HEADING, 1)) {
      return `${ElementType.HEADING}-1`;
    } else if (isBlockActive(editor, ElementType.HEADING, 2)) {
      return `${ElementType.HEADING}-2`;
    } else if (isBlockActive(editor, ElementType.HEADING, 3)) {
      return `${ElementType.HEADING}-3`;
    } else if (isBlockActive(editor, ElementType.HEADING, 4)) {
      return `${ElementType.HEADING}-4`;
    } else if (isBlockActive(editor, ElementType.HEADING, 5)) {
      return `${ElementType.HEADING}-5`;
    } else if (isBlockActive(editor, ElementType.HEADING, 6)) {
      return `${ElementType.HEADING}-6`;
    } else {
      return `${ElementType.PARAGRAPH}`;
    }
  };

  const menu = useMemo(
    () => (
      <Menu
        className={styles["dropdown-content"]}
        activeKey={getCurrentKey()}
      >
        <Menu.Item
          onClick={() => handleClickMenu(ElementType.HEADING, 1)}
          key={`${ElementType.HEADING}-1`}
        >
          <h1>{headingConfig[`${ElementType.HEADING}-1`]}</h1>
        </Menu.Item>
        <Menu.Item
          onClick={() => handleClickMenu(ElementType.HEADING, 2)}
          key={`${ElementType.HEADING}-2`}
        >
          <h2>{headingConfig[`${ElementType.HEADING}-2`]}</h2>
        </Menu.Item>
        <Menu.Item
          onClick={() => handleClickMenu(ElementType.HEADING, 3)}
          key={`${ElementType.HEADING}-3`}
        >
          <h3>{headingConfig[`${ElementType.HEADING}-3`]}</h3>
        </Menu.Item>
        <Menu.Item
          onClick={() => handleClickMenu(ElementType.HEADING, 4)}
          key={`${ElementType.HEADING}-4`}
        >
          <h4>{headingConfig[`${ElementType.HEADING}-4`]}</h4>
        </Menu.Item>
        <Menu.Item
          onClick={() => handleClickMenu(ElementType.HEADING, 5)}
          key={`${ElementType.HEADING}-5`}
        >
          <h5>{headingConfig[`${ElementType.HEADING}-5`]}</h5>
        </Menu.Item>
        <Menu.Item
          onClick={() => handleClickMenu(ElementType.HEADING, 6)}
          key={`${ElementType.HEADING}-6`}
        >
          <h6>{headingConfig[`${ElementType.HEADING}-6`]}</h6>
        </Menu.Item>
        <Menu.Item
          onClick={() => handleClickMenu(ElementType.PARAGRAPH)}
          key={`${ElementType.PARAGRAPH}`}
        >
          {headingConfig[`${ElementType.PARAGRAPH}`]}
        </Menu.Item>
      </Menu>
    ),
    [getCurrentKey]
  );

  return (
    <SlateTooltip title="文本样式">
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button size="small" type="text" style={{width: '100px'}}>
          {headingConfig[getCurrentKey()]}
          <DownOutlined />
        </Button>
      </Dropdown>
    </SlateTooltip>
  );
};

export default HeadingButton;
