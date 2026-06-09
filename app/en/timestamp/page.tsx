import type { Metadata } from "next";
import TimestampTool from "@/app/timestamp/TimestampTool";

export const metadata: Metadata = {
  title: "Timestamp Converter",
  description: "Free online Unix timestamp converter. Supports seconds and milliseconds timestamp ↔ date conversion. Runs in your browser.",
};

export default function EnTimestampPage() {
  return <TimestampTool locale="en" />;
}
