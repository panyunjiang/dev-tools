"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FileText, Copy, Check } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { i18n } from "@/lib/i18n";

export default function MarkdownTool({ locale = "zh" }: { locale?: Locale }) {
  const t = i18n[locale].markdown;
  const [md, setMd] = useState<string>(t.defaultMd);
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    const el = document.getElementById("md-preview");
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <FileText size={16} className="text-terminal-purple" />
        <span className="font-mono text-sm text-terminal-green">markdown</span>
        <span className="text-terminal-muted font-mono text-xs">--preview --gfm</span>
        <div className="flex-1" />
        <button onClick={copyText} className="btn btn-ghost">
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied!" : t.copyText}
        </button>
      </div>

      <div className="tool-container">
        <div className="tool-panel">
          <div className="tool-panel-header">
            <span>{t.editor}</span>
            <span className="text-terminal-muted">{md.length} {t.chars}</span>
          </div>
          <div className="tool-panel-body">
            <textarea value={md} onChange={(e) => setMd(e.target.value)} placeholder={t.placeholder} spellCheck={false} />
          </div>
        </div>
        <div className="tool-panel">
          <div className="tool-panel-header"><span>{t.preview}</span></div>
          <div className="tool-panel-body markdown-preview" id="md-preview">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
