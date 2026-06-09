import type { Metadata } from "next";
import UrlTool from "./UrlTool";

export const metadata: Metadata = {
  title: "URL 编解码",
  description: "免费在线 URL 编码解码工具。支持 encodeURIComponent 和完整 URL 编码，纯前端运行。",
};

export default function UrlPage() {
  return <UrlTool locale="zh" />;
}
