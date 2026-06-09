import type { Metadata } from "next";
import RegexTool from "@/app/regex/RegexTool";

export const metadata: Metadata = {
  title: "Regex Tester",
  description: "Free online regex testing tool with match highlighting, global search, and multiline mode. Runs in your browser.",
};

export default function EnRegexPage() {
  return <RegexTool locale="en" />;
}
