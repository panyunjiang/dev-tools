"use client";

import { useState, useCallback } from "react";
import { Braces, Copy, Check, Minimize2, Maximize2, AlertCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { i18n } from "@/lib/i18n";

export default function JsonTool({ locale = "zh" }: { locale?: Locale }) {
  const t = i18n[locale].json;
  const tc = i18n[locale].common;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const format = useCallback(() => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  }, [input]);

  const minify = useCallback(() => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  }, [input]);

  const validate = useCallback(() => {
    try {
      JSON.parse(input);
      setError("");
      setOutput(t.valid);
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  }, [input, t.valid]);

  const copyOutput = useCallback(() => {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [output]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <Braces size={16} className="text-terminal-purple" />
        <span className="font-mono text-sm text-terminal-green">json</span>
        <span className="text-terminal-muted font-mono text-xs">--format/compact/validate</span>
        <div className="flex-1" />
        <button onClick={format} className="btn btn-primary">
          <Maximize2 size={14} /> {t.format}
        </button>
        <button onClick={minify} className="btn btn-secondary">
          <Minimize2 size={14} /> {t.minify}
        </button>
        <button onClick={validate} className="btn btn-ghost">
          {t.validate}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg border border-red-500/30 bg-red-500/10 flex items-start gap-2 font-mono text-xs text-red-400">
          <AlertCircle size={14} className="shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div className="tool-container">
        <div className="tool-panel">
          <div className="tool-panel-header"><span>{t.inputLabel}</span></div>
          <div className="tool-panel-body">
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder={t.placeholder} spellCheck={false} />
          </div>
        </div>
        <div className="tool-panel">
          <div className="tool-panel-header">
            <span>{t.outputLabel}</span>
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
