import type { Metadata } from "next";
import UrlTool from "@/app/url/UrlTool";

export const metadata: Metadata = {
  title: "URL Encoder/Decoder",
  description: "Free online URL encoder and decoder. Supports encodeURIComponent and full URL encoding. Runs in your browser.",
};

export default function EnUrlPage() {
  return <UrlTool locale="en" />;
}
