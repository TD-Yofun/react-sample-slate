import React, { useMemo, useCallback, useState } from "react";
import classNames from "classnames";
import { useSlate } from "slate-react";

// buttons
import HeadingButton from "./components/heading";
import AlignButton from "./components/align";
import LinkButton from "./components/link";
import StyleButton from "./components/style";
import CodeButton from "./components/code";
import ListButton from "./components/list";

import styles from "./style.module.scss";

interface ToolbarProps {
  className?: string;
  style?: React.CSSProperties;
}

const Toolbar: React.FC<ToolbarProps> = ({ className, style }) => {
  const editor = useSlate();

  return (
    <div
      className={classNames(styles["slate-toolbar"], className)}
      style={style}
    >
      <HeadingButton editor={editor} />
      <StyleButton />
      <AlignButton editor={editor} />
      <CodeButton />
      <ListButton editor={editor} />
      <LinkButton editor={editor} />
    </div>
  );
};
export default Toolbar;
