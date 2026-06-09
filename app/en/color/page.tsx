import type { Metadata } from "next";
import ColorTool from "@/app/color/ColorTool";

export const metadata: Metadata = {
  title: "Color Converter",
  description: "Free online color converter. Supports HEX, RGB, HSL conversion with real-time preview. Runs in your browser.",
};

export default function EnColorPage() {
  return <ColorTool locale="en" />;
}
