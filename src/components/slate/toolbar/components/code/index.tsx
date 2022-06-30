import React from "react";
import { Button } from "antd";
import { CodeOutlined } from "@ant-design/icons";
import SlateTooltip from "../../../components/tooltip";

const CodeButton = () => {
  return (
    <>
      <SlateTooltip title="代码块">
        <Button
          size="small"
          type="text"
          icon={<CodeOutlined></CodeOutlined>}
        ></Button>
      </SlateTooltip>
    </>
  );
};

export default CodeButton;
