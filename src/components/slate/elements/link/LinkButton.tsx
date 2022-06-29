import React, { useCallback, useState } from "react";
import { Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { Editor } from "slate";
import classNames from "classnames";

import LinkEditModal from "./LinkEditModal";

import styles from "./style.module.scss";

interface LinkButtonProps {
  active: boolean;
  editor: Editor;
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  active,
  editor,
  disabled,
  icon,
  children,
}) => {
  const [visible, setVisible] = useState(false);

  const handleClick = useCallback(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <Button
        size="small"
        type="text"
        disabled={disabled}
        icon={icon || <LinkOutlined />}
        className={classNames({
          [styles["slate-link-button-active"]]: active,
        })}
        onClick={handleClick}
      >
        {children}
      </Button>
      <LinkEditModal
        visible={visible}
        editor={editor}
        onVisibleChange={(v) => setVisible(v)}
      />
    </>
  );
};

export default LinkButton;
