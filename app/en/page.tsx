import Link from "next/link";
import {
  Braces,
  Regex,
  Binary,
  Link2,
  Clock,
  Hash,
  Palette,
  FileText,
  ArrowRight,
} from "lucide-react";
import { i18n } from "@/lib/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.aiv.yn.cn"),
  title: {
    default: "DevTools - Developer Toolbox",
    template: "%s | DevTools",
  },
  description: i18n.en.siteDesc,
  keywords: [
    "developer tools", "JSON formatter", "regex tester", "Base64", "URL encoder",
    "timestamp converter", "hash generator", "color converter", "Markdown preview", "online tools",
  ],
  authors: [{ name: "DevTools" }],
  openGraph: {
    type: "website", locale: "en_US", url: "https://dev.aiv.yn.cn/en",
    siteName: "DevTools", title: "DevTools - Developer Toolbox",
    description: i18n.en.siteDesc,
  },
  robots: { index: true, follow: true },
  alternates: { languages: { zh: "https://dev.aiv.yn.cn" } },
};

const toolKeys = ["json", "regex", "base64", "url", "timestamp", "hash", "color", "markdown"] as const;
const icons = [Braces, Regex, Binary, Link2, Clock, Hash, Palette, FileText];

export default function EnHome() {
  const t = i18n.en;
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10">
        <div className="font-mono text-sm space-y-2">
          <p className="text-terminal-muted">
            <span className="text-terminal-green">user@devtools</span>
            <span className="text-terminal-muted">:</span>
            <span className="text-terminal-purple">~</span>
            <span className="text-terminal-muted">$</span>
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-terminal-green font-mono">
            {t.hero.title}
          </h1>
          <p className="text-terminal-muted text-xs mt-2">{t.hero.line1}</p>
          <p className="text-terminal-muted text-xs">{t.hero.line2}</p>
          <p className="text-terminal-muted text-xs">{t.hero.line3}</p>
        </div>
      </div>

      <div className="space-y-2">
        {toolKeys.map((key, i) => {
          const Icon = icons[i];
          const tool = t.tools[key];
          return (
            <Link
              key={key}
              href={`/en/${key}`}
              className="group flex items-center gap-4 p-4 rounded-lg border border-terminal-border bg-terminal-card hover:border-terminal-green/50 hover:bg-terminal-green/5 transition-all"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className="text-terminal-green font-mono text-sm shrink-0">&gt;</span>
                <Icon size={16} className="text-terminal-purple shrink-0 group-hover:text-terminal-green transition-colors" />
                <span className="font-mono text-sm text-terminal-green font-medium shrink-0">{tool.cmd}</span>
                <span className="text-terminal-muted text-sm hidden sm:inline">--</span>
                <span className="text-terminal-muted text-sm truncate">{tool.desc}</span>
              </div>
              <ArrowRight size={14} className="text-terminal-border group-hover:text-terminal-green transition-colors shrink-0" />
            </Link>
          );
        })}
      </div>

      <div className="mt-12 p-6 rounded-lg border border-terminal-border bg-terminal-card">
        <div className="font-mono text-xs space-y-1 text-terminal-muted">
          <p><span className="text-terminal-green">---</span> {t.about.heading}</p>
          <p className="mt-3 text-terminal-text leading-relaxed text-sm">{t.about.en}</p>
        </div>
      </div>
    </div>
  );
}
