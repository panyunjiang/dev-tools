import type { Metadata } from "next";
import MarkdownTool from "@/app/markdown/MarkdownTool";

export const metadata: Metadata = {
  title: "Markdown Preview",
  description: "Free online Markdown editor and previewer. Supports GFM syntax, live preview, split-pane editing. Runs in your browser.",
};

export default function EnMarkdownPage() {
  return <MarkdownTool locale="en" />;
}
