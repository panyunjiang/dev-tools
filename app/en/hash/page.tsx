import type { Metadata } from "next";
import HashTool from "@/app/hash/HashTool";

export const metadata: Metadata = {
  title: "Hash Generator",
  description: "Free online hash generator. Supports MD5, SHA-1, SHA-256, SHA-512 algorithms. Runs in your browser.",
};

export default function EnHashPage() {
  return <HashTool locale="en" />;
}
