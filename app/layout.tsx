import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.aiv.yn.cn"),
  title: {
    default: "开发者工具箱 | DevTools",
    template: "%s | DevTools",
  },
  description:
    "免费在线开发者工具箱 - JSON格式化、正则测试、Base64编解码、URL编解码、时间戳转换、Hash生成、颜色转换、Markdown预览。纯前端实现，数据不上传。",
  keywords: [
    "开发者工具",
    "JSON格式化",
    "正则测试",
    "Base64",
    "URL编解码",
    "时间戳转换",
    "Hash生成",
    "颜色转换",
    "Markdown预览",
    "在线工具",
    "前端工具",
  ],
  authors: [{ name: "DevTools" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://dev.aiv.yn.cn",
    siteName: "开发者工具箱",
    title: "开发者工具箱 | DevTools",
    description:
      "免费在线开发者工具箱 - 纯前端实现的常用开发工具集合",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="relative">
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
