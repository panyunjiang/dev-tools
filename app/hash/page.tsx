import type { Metadata } from "next";
import HashTool from "./HashTool";

export const metadata: Metadata = {
  title: "Hash 生成",
  description: "免费在线哈希生成工具。支持 MD5、SHA-1、SHA-256、SHA-512 算法，纯前端运行。",
};

export default function HashPage() {
  return <HashTool locale="zh" />;
}
