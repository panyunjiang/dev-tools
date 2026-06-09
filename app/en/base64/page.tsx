import type { Metadata } from "next";
import Base64Tool from "@/app/base64/Base64Tool";

export const metadata: Metadata = {
  title: "Base64 Encoder/Decoder",
  description: "Free online Base64 encoder and decoder. Supports UTF-8 text, one-click copy. Runs in your browser.",
};

export default function EnBase64Page() {
  return <Base64Tool locale="en" />;
}
