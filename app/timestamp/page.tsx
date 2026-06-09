import type { Metadata } from "next";
import TimestampTool from "./TimestampTool";

export const metadata: Metadata = {
  title: "时间戳转换",
  description: "免费在线 Unix 时间戳转换工具。支持秒级和毫秒级时间戳与日期互转，纯前端运行。",
};

export default function TimestampPage() {
  return <TimestampTool locale="zh" />;
}
