import React, { useMemo, useCallback, useState } from "react";
import classNames from "classnames";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Transforms } from "slate";
import { useSlate } from "slate-react";

import { isBlockActive } from "../utils";

// buttons
import { LinkButton } from "../elements/link";

import styles from "./style.module.scss";
import { ElementType, HeadingElement } from "../types";

interface ToolbarProps {
  className?: string;
  style?: React.CSSProperties;
}

const headings = [
  { label: "标题 1", key: `1-${ElementType.HEADING}` },
  { label: "标题 2", key: `2-${ElementType.HEADING}` },
  { label: "标题 3", key: `3-${ElementType.HEADING}` },
  { label: "标题 4", key: `4-${ElementType.HEADING}` },
  { label: "标题 5", key: `5-${ElementType.HEADING}` },
  { label: "标题 6", key: `6-${ElementType.HEADING}` },
  { label: "普通文本", key: `${ElementType.PARAGRAPH}` },
];

const Toolbar: React.FC<ToolbarProps> = ({ className, style }) => {
  const editor = useSlate();

  const [heading, setHeading] = useState<string>(ElementType.PARAGRAPH);

  const handleClickHeading = useCallback(
    (e: { key: string }) => {
      const { key } = e;
      const [format2, format1] = key.split("-");
      const format = (format1 || format2) as
        | ElementType.HEADING
        | ElementType.PARAGRAPH;
      setHeading(key);
      const isActive = isBlockActive(editor, format);

      if (format === ElementType.PARAGRAPH) {
        Transforms.setNodes(editor, { type: format });
      } else {
        Transforms.setNodes(editor, {
          type: format,
          level: format2
            ? (Number(format2) as HeadingElement["level"])
            : undefined,
        });
      }
    },
    [editor]
  );

  const headingOverlay = useMemo(
    () => (
      <Menu
        selectable
        defaultSelectedKeys={[heading]}
        onClick={handleClickHeading}
        items={headings}
      />
    ),
    [handleClickHeading, heading]
  );

  const headingText = useMemo(() => {
    // const [format2, format1] = heading.split("-");
    // const format = (format1 || format2) as
    //   | ElementType.HEADING
    //   | ElementType.PARAGRAPH;

    // isBlockActive(editor, format)
    return headings.find((v) => v.key === heading)?.label;
  }, [heading]);

  return (
    <div
      className={classNames(styles["slate-toolbar"], className)}
      style={style}
    >
      <Dropdown overlay={headingOverlay} trigger={["click"]}>
        <Button size="small" type="text" style={{ width: "100px" }}>
          {headingText}
          <DownOutlined />
        </Button>
      </Dropdown>
      <LinkButton
        key={"link"}
        active={isBlockActive(editor, ElementType.LINK)}
        editor={editor}
      />
    </div>
  );
};
export default Toolbar;
