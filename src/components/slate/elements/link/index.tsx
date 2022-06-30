import React, { useCallback, useMemo, useState, useEffect } from "react";
import { Popover, Button } from "antd";
import { SelectOutlined, DisconnectOutlined } from "@ant-design/icons";
import classNames from "classnames";
import {
  RenderElementProps,
  useSelected,
  useFocused,
  useSlateStatic,
} from "slate-react";

import { LinkElement } from "../../types";
import SlateTooltip from "../../components/tooltip";
import { removeLink } from "../../utils/link";

import styles from "./style.module.scss";

interface LinkProps extends RenderElementProps {}

const Link: React.FC<LinkProps> = (props) => {
  const { element, attributes, children } = props;
  const el = element as LinkElement;

  const editor = useSlateStatic();
  const selected = useSelected();
  const focused = useFocused();

  const [visible, setVisible] = useState(false);

  const handleClick = useCallback((href: string = "") => {
    if (/^http(s)?/i.test(href)) {
      window.open(href);
    }
  }, []);

  const popContent = useMemo(
    () => (
      <div className="slate-link-pop">
        <SlateTooltip title="编辑链接">
          <Button type="text" size="small">
            编辑链接
          </Button>
        </SlateTooltip>
        <div className="divider"></div>
        <SlateTooltip title="在新选项卡中打开链接">
          <Button
            type="text"
            icon={<SelectOutlined />}
            size="small"
            onClick={() => handleClick(el.href)}
          ></Button>
        </SlateTooltip>
        <div className="divider"></div>
        <SlateTooltip title="取消链接">
          <Button
            type="text"
            size="small"
            icon={<DisconnectOutlined />}
            onClick={() => removeLink(editor)}
          ></Button>
        </SlateTooltip>
      </div>
    ),
    [el.href, handleClick, editor]
  );

  const handleVisibleChange = (newVisible: boolean) => {
    setVisible(newVisible);
  };

  return (
    <span className={classNames(styles["slate-link"])}>
      <Popover
        visible={visible}
        trigger={"click"}
        content={popContent}
        overlayClassName={classNames(styles["slate-link-overlay"])}
        onVisibleChange={handleVisibleChange}
      >
        <a href={el.href}>{children}</a>
      </Popover>
    </span>
  );
};

export default Link;
