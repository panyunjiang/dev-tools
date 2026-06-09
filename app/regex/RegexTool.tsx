"use client";

import { useState, useMemo } from "react";
import { Regex, Copy, Check, AlertCircle, Info } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { i18n } from "@/lib/i18n";

export default function RegexTool({ locale = "zh" }: { locale?: Locale }) {
  const t = i18n[locale].regex;
  const tc = i18n[locale].common;
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testStr, setTestStr] = useState("");
  const [copied, setCopied] = useState(false);

  const { matches, error } = useMemo(() => {
    if (!pattern || !testStr) return { matches: [] as { text: string; index: number }[], error: "" };
    try {
      const regex = new RegExp(pattern, flags);
      const found: { text: string; index: number }[] = [];
      let m: RegExpExecArray | null;
      if (flags.includes("g")) {
        while ((m = regex.exec(testStr)) !== null) {
          found.push({ text: m[0], index: m.index });
          if (m[0].length === 0) regex.lastIndex++;
        }
      } else {
        m = regex.exec(testStr);
        if (m) found.push({ text: m[0], index: m.index });
      }
      return { matches: found, error: "" };
    } catch (e) {
      return { matches: [], error: (e as Error).message };
    }
  }, [pattern, flags, testStr]);

  const highlightText = useMemo(() => {
    if (!matches.length || !testStr) return null;
    const parts: React.ReactNode[] = [];
    let lastIdx = 0;
    const sorted = [...matches].sort((a, b) => a.index - b.index);
    sorted.forEach((m, i) => {
      if (m.index > lastIdx) {
        parts.push(<span key={`t${i}`}>{testStr.slice(lastIdx, m.index)}</span>);
      }
      parts.push(
        <mark key={`m${i}`} className="bg-terminal-green/30 text-terminal-green rounded px-0.5">{m.text}</mark>
      );
      lastIdx = m.index + m.text.length;
    });
    if (lastIdx < testStr.length) {
      parts.push(<span key="end">{testStr.slice(lastIdx)}</span>);
    }
    return parts;
  }, [matches, testStr]);

  const copyMatches = () => {
    const text = matches.map((m, i) => `[${i}] "${m.text}" at index ${m.index}`).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <Regex size={16} className="text-terminal-purple" />
        <span className="font-mono text-sm text-terminal-green">regex-test</span>
        <span className="text-terminal-muted font-mono text-xs">--pattern &lt;regex&gt; --flags &lt;g|i|m&gt;</span>
      </div>

      <div className="card mb-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <label className="block text-xs font-mono text-terminal-muted mb-1">{t.patternLabel}</label>
            <input type="text" value={pattern} onChange={(e) => setPattern(e.target.value)} placeholder="[a-zA-Z]+" spellCheck={false} />
          </div>
          <div className="w-full sm:w-32">
            <label className="block text-xs font-mono text-terminal-muted mb-1">{t.flagsLabel}</label>
            <input type="text" value={flags} onChange={(e) => setFlags(e.target.value)} placeholder="g" spellCheck={false} />
          </div>
        </div>
        {error && (
          <div className="mt-3 flex items-center gap-2 text-xs font-mono text-red-400">
            <AlertCircle size={12} /> {error}
          </div>
        )}
      </div>

      <div className="tool-container">
        <div className="tool-panel">
          <div className="tool-panel-header"><span>{t.testString}</span></div>
          <div className="tool-panel-body">
            <textarea value={testStr} onChange={(e) => setTestStr(e.target.value)} placeholder={t.matchPlaceholder} spellCheck={false} />
          </div>
        </div>
        <div className="tool-panel">
          <div className="tool-panel-header">
            <span>{t.matches} ({matches.length})</span>
            <button onClick={copyMatches} disabled={!matches.length} className="flex items-center gap-1 text-terminal-muted hover:text-terminal-green transition-colors disabled:opacity-30">
              {copied ? <Check size={12} /> : <Copy size={12} />}
              <span>{copied ? tc.copied : tc.copy}</span>
            </button>
          </div>
          <div className="tool-panel-body p-4">
            {testStr && highlightText ? (
              <div className="font-mono text-sm whitespace-pre-wrap break-all leading-relaxed">{highlightText}</div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-terminal-muted font-mono text-xs gap-2">
                <Info size={16} /><span>{t.matchPlaceholder}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {matches.length > 0 && (
        <div className="card mt-4">
          <div className="text-xs font-mono text-terminal-muted mb-2">
            <Info size={12} className="inline mr-1" />{t.matchDetails}
          </div>
          <div className="space-y-1 max-h-48 overflow-auto">
            {matches.map((m, i) => (
              <div key={i} className="font-mono text-xs flex items-center gap-3">
                <span className="text-terminal-purple w-8 text-right">[{i}]</span>
                <span className="text-terminal-green">&quot;{m.text}&quot;</span>
                <span className="text-terminal-muted">{t.index}: {m.index}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
