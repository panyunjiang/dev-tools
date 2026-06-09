"use client";

import { useState, useCallback } from "react";
import { Link2, Copy, Check, ArrowDown, ArrowUp, AlertCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { i18n } from "@/lib/i18n";

export default function UrlTool({ locale = "zh" }: { locale?: Locale }) {
  const t = i18n[locale].url;
  const tc = i18n[locale].common;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [copied, setCopied] = useState(false);

  const process = useCallback(() => {
    try {
      if (mode === "encode") {
        setOutput(encodeURIComponent(input));
      } else {
        setOutput(decodeURIComponent(input));
      }
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  }, [input, mode]);

  const copyOutput = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <Link2 size={16} className="text-terminal-purple" />
        <span className="font-mono text-sm text-terminal-green">url-encode</span>
        <span className="text-terminal-muted font-mono text-xs">--encode|--decode</span>
        <div className="flex-1" />
        <button onClick={() => setMode(mode === "encode" ? "decode" : "encode")} className="btn btn-ghost">
          {mode === "encode" ? <ArrowDown size={14} /> : <ArrowUp size={14} />}
          {mode === "encode" ? t.encodeMode : t.decodeMode}
        </button>
        <button onClick={process} className="btn btn-primary">
          {mode === "encode" ? t.encode : t.decode}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg border border-red-500/30 bg-red-500/10 flex items-center gap-2 font-mono text-xs text-red-400">
          <AlertCircle size={14} /> {error}
        </div>
      )}

      <div className="tool-container">
        <div className="tool-panel">
          <div className="tool-panel-header"><span>{mode === "encode" ? t.plainText : t.encodedUrl}</span></div>
          <div className="tool-panel-body">
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder={mode === "encode" ? t.encodePlaceholder : t.decodePlaceholder} spellCheck={false} />
          </div>
        </div>
        <div className="tool-panel">
          <div className="tool-panel-header">
            <span>{mode === "encode" ? t.encodedOutput : t.decodedText}</span>
            <button onClick={copyOutput} className="flex items-center gap-1 text-terminal-muted hover:text-terminal-green transition-colors">
              {copied ? <Check size={12} /> : <Copy size={12} />}
              <span>{copied ? tc.copied : tc.copy}</span>
            </button>
          </div>
          <div className="tool-panel-body">
            <textarea value={output} readOnly placeholder={t.outputPlaceholder} className="code-block" />
          </div>
        </div>
      </div>
    </div>
  );
}
