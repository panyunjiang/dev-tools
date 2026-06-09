import type { Metadata } from "next";
import ColorTool from "./ColorTool";

export const metadata: Metadata = {
  title: "颜色转换",
  description: "免费在线颜色转换工具。支持 HEX、RGB、HSL 互转，实时颜色预览，纯前端运行。",
};

export default function ColorPage() {
  return <ColorTool locale="zh" />;
}
