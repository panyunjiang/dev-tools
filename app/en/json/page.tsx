import type { Metadata } from "next";
import JsonTool from "@/app/json/JsonTool";

export const metadata: Metadata = {
  title: "JSON Formatter",
  description: "Free online JSON formatter, minifier, and validator. Supports syntax highlighting, one-click copy. Runs in your browser.",
};

export default function EnJsonPage() {
  return <JsonTool locale="en" />;
}
