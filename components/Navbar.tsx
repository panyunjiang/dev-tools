"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { getLocaleFromPath, getAlternatePath, getToolPath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const toolKeys = ["json", "regex", "base64", "url", "timestamp", "hash", "color", "markdown"] as const;

const labels: Record<Locale, Record<(typeof toolKeys)[number], string>> = {
  zh: {
    json: "JSON",
    regex: "Regex",
    base64: "Base64",
    url: "URL",
    timestamp: "时间戳",
    hash: "Hash",
    color: "颜色",
    markdown: "Markdown",
  },
  en: {
    json: "JSON",
    regex: "Regex",
    base64: "Base64",
    url: "URL",
    timestamp: "Timestamp",
    hash: "Hash",
    color: "Color",
    markdown: "Markdown",
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const altPath = getAlternatePath(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (tool: string) => {
    const path = getToolPath(tool, locale);
    return pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-terminal-border bg-terminal-bg/95 backdrop-blur supports-[backdrop-filter]:bg-terminal-bg/80">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href={locale === "en" ? "/en" : "/"}
            className="flex items-center gap-2 font-mono text-terminal-green hover:text-terminal-green/80 transition-colors"
          >
            <Terminal size={18} />
            <span className="text-sm font-semibold">$ devtools</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {toolKeys.map((t) => (
              <Link
                key={t}
                href={getToolPath(t, locale)}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                  isActive(t)
                    ? "text-terminal-green bg-terminal-green/10"
                    : "text-terminal-muted hover:text-terminal-green hover:bg-terminal-green/5"
                }`}
              >
                {labels[locale][t]}
              </Link>
            ))}

            {/* Language switch */}
            <Link
              href={altPath}
              className="ml-2 px-2.5 py-1.5 text-xs font-mono rounded-md border border-terminal-border text-terminal-purple hover:border-terminal-purple hover:bg-terminal-purple/10 transition-colors flex items-center gap-1"
            >
              <Globe size={12} />
              {locale === "zh" ? "EN" : "中"}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-terminal-muted hover:text-terminal-green"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-3 border-t border-terminal-border mt-1 pt-2">
            <div className="flex flex-wrap gap-2">
              {toolKeys.map((t) => (
                <Link
                  key={t}
                  href={getToolPath(t, locale)}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                    isActive(t)
                      ? "text-terminal-green bg-terminal-green/10"
                      : "text-terminal-muted hover:text-terminal-green hover:bg-terminal-green/5"
                  }`}
                >
                  {labels[locale][t]}
                </Link>
              ))}
              <Link
                href={altPath}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-1.5 text-xs font-mono rounded-md border border-terminal-border text-terminal-purple hover:border-terminal-purple hover:bg-terminal-purple/10 transition-colors flex items-center gap-1"
              >
                <Globe size={12} />
                {locale === "zh" ? "EN" : "中"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
