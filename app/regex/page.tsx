import type { Metadata } from "next";
import RegexTool from "./RegexTool";

export const metadata: Metadata = {
  title: "正则测试",
  description: "免费在线正则表达式测试工具。支持高亮匹配、全局搜索、多行模式，纯前端运行。",
};

export default function RegexPage() {
  return <RegexTool locale="zh" />;
}
