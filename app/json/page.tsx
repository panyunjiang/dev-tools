import type { Metadata } from "next";
import JsonTool from "./JsonTool";

export const metadata: Metadata = {
  title: "JSON 格式化",
  description: "免费在线 JSON 格式化、压缩、校验工具。支持语法高亮、一键复制，纯前端运行。",
};

export default function JsonPage() {
  return <JsonTool locale="zh" />;
}
