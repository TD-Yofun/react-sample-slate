import React from "react";
import { Button } from "antd";
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
} from "@ant-design/icons";
import SlateTooltip from "../../../components/tooltip";

const StyleButton = () => {
  return (
    <>
      <SlateTooltip title="加粗">
        <Button
          size="small"
          type="text"
          icon={<BoldOutlined></BoldOutlined>}
        ></Button>
      </SlateTooltip>
      <SlateTooltip title="斜体">
        <Button
          size="small"
          type="text"
          icon={<ItalicOutlined></ItalicOutlined>}
        ></Button>
      </SlateTooltip>
      <SlateTooltip title="下划线">
        <Button
          size="small"
          type="text"
          icon={<UnderlineOutlined></UnderlineOutlined>}
        ></Button>
      </SlateTooltip>
      <SlateTooltip title="中划线">
        <Button
          size="small"
          type="text"
          icon={<StrikethroughOutlined></StrikethroughOutlined>}
        ></Button>
      </SlateTooltip>
    </>
  );
};

export default StyleButton;
