"use client";

import { Terminal } from "lucide-react";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/lib/i18n";
import { i18n } from "@/lib/i18n";

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = i18n[locale];

  return (
    <footer className="border-t border-terminal-border py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-terminal-muted">
          <div className="flex items-center gap-2">
            <Terminal size={14} />
            <span>$ echo &quot;{t.footer.cmd}&quot;</span>
          </div>
          <div className="flex items-center gap-4">
            <span>dev.aiv.yn.cn</span>
            <span className="text-terminal-border">|</span>
            <span>{t.footer.noData}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
