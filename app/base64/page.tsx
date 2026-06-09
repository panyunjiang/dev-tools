import type { Metadata } from "next";
import Base64Tool from "./Base64Tool";

export const metadata: Metadata = {
  title: "Base64 编解码",
  description: "免费在线 Base64 编码解码工具。支持 UTF-8 文本，一键复制结果，纯前端运行。",
};

export default function Base64Page() {
  return <Base64Tool locale="zh" />;
}
