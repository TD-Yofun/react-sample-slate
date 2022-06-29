import React from "react";
import { Modal, Form, Input } from "antd";
import { Editor } from "slate";

interface LinkEditModalProps {
  visible: boolean;
  editor: Editor;
  onVisibleChange?: (value: boolean) => void;
}

const LinkEditModal: React.FC<LinkEditModalProps> = ({
  visible,
  onVisibleChange,
}) => {
  return (
    <Modal
      title="添加链接"
      visible={visible}
      onCancel={() => onVisibleChange?.(false)}
    >
      <Form layout="vertical">
        <Form.Item
          name={"name"}
          label="文本"
          rules={[{ required: true, message: "请填写文本" }]}
        >
          <Input placeholder="请输入文本" />
        </Form.Item>
        <Form.Item
          name={"link"}
          label="链接"
          rules={[{ required: true, message: "请填写链接" }]}
        >
          <Input placeholder="请输入链接" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LinkEditModal;
