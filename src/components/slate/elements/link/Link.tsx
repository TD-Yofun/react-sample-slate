import React, { useCallback, useMemo, useState, useEffect } from "react";
import { Popover, Button, Tooltip } from "antd";
import { SelectOutlined, DisconnectOutlined } from "@ant-design/icons";
import classNames from "classnames";
import {
  RenderElementProps,
  useSelected,
  useFocused,
  useSlateStatic,
} from "slate-react";

import { LinkElement } from "../../types";
import styles from "./style.module.scss";
import { removeLink } from "../../utils/link";

interface LinkProps extends RenderElementProps {}

const Link: React.FC<LinkProps> = (props) => {
  const { element, attributes, children } = props;
  const el = element as LinkElement;

  const editor = useSlateStatic();
  const selected = useSelected();
  const focused = useFocused();

  const [visible, setVisible] = useState(false);

  const tooltipClassName = useMemo(
    () => classNames(styles["slate-link-tooltip-overlay"]),
    []
  );

  const handleClick = useCallback((href: string = "") => {
    if (/^http(s)?/i.test(href)) {
      window.open(href);
    }
  }, []);

  const popContent = useMemo(
    () => (
      <div className="slate-link-pop">
        <Tooltip
          title="编辑链接"
          overlayClassName={tooltipClassName}
          arrowContent={false}
        >
          <Button type="text" size="small">
            编辑链接
          </Button>
        </Tooltip>
        <div className="divider"></div>
        <Tooltip
          title="在新选项卡中打开链接"
          overlayClassName={tooltipClassName}
        >
          <Button
            type="text"
            icon={<SelectOutlined />}
            size="small"
            onClick={() => handleClick(el.href)}
          ></Button>
        </Tooltip>
        <div className="divider"></div>
        <Tooltip title="取消链接" overlayClassName={tooltipClassName}>
          <Button
            type="text"
            size="small"
            icon={<DisconnectOutlined />}
            onClick={() => removeLink(editor)}
          ></Button>
        </Tooltip>
      </div>
    ),
    [tooltipClassName, el.href, handleClick, editor]
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
