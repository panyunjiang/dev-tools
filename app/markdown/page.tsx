import type { Metadata } from "next";
import MarkdownTool from "./MarkdownTool";

export const metadata: Metadata = {
  title: "Markdown 预览",
  description: "免费在线 Markdown 编辑预览工具。支持 GFM 语法、实时预览、分屏编辑，纯前端运行。",
};

export default function MarkdownPage() {
  return <MarkdownTool locale="zh" />;
}
