"use client";

import { useState, useEffect, useCallback } from "react";
import { Clock, Copy, Check, RefreshCw } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { i18n } from "@/lib/i18n";

export default function TimestampTool({ locale = "zh" }: { locale?: Locale }) {
  const t = i18n[locale].timestamp;
  const [now, setNow] = useState(Math.floor(Date.now() / 1000));
  const [timestamp, setTimestamp] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [tsToDateResult, setTsToDateResult] = useState("");
  const [dateToTsResult, setDateToTsResult] = useState("");
  const [copied, setCopied] = useState<"ts" | "date" | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(timer);
  }, []);

  const tsToDate = useCallback(() => {
    const ts = parseInt(timestamp, 10);
    if (isNaN(ts)) { setTsToDateResult(t.invalidTs); return; }
    const ms = ts > 1e12 ? ts : ts * 1000;
    const d = new Date(ms);
    setTsToDateResult(
      `${t.dateLabel}: ${d.toLocaleString(locale === "zh" ? "zh-CN" : "en-US")}\nISO: ${d.toISOString()}\nUTC: ${d.toUTCString()}\nTimestamp: ${ts}`
    );
  }, [timestamp, locale, t]);

  const dateToTs = useCallback(() => {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) { setDateToTsResult(t.invalidDate); return; }
    const sec = Math.floor(d.getTime() / 1000);
    const ms = d.getTime();
    setDateToTsResult(
      `${t.seconds}: ${sec}\n${t.milliseconds}: ${ms}\nISO: ${d.toISOString()}\n${t.locale}: ${d.toLocaleString(locale === "zh" ? "zh-CN" : "en-US")}`
    );
  }, [dateStr, locale, t]);

  const copyText = (text: string, which: "ts" | "date") => {
    navigator.clipboard.writeText(text);
    setCopied(which);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center gap-2 mb-6">
        <Clock size={16} className="text-terminal-purple" />
        <span className="font-mono text-sm text-terminal-green">timestamp</span>
        <span className="text-terminal-muted font-mono text-xs">--now|--convert</span>
      </div>

      <div className="card mb-6">
        <div className="text-xs font-mono text-terminal-muted mb-2">{t.currentTs}</div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-2xl text-terminal-green">{now}</span>
          <span className="font-mono text-xs text-terminal-muted">{new Date(now * 1000).toLocaleString(locale === "zh" ? "zh-CN" : "en-US")}</span>
          <button onClick={() => copyText(String(now), "ts")} className="ml-auto text-terminal-muted hover:text-terminal-green transition-colors">
            {copied === "ts" ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      <div className="card mb-4">
        <div className="text-xs font-mono text-terminal-muted mb-3">
          <span className="text-terminal-green">&gt;</span> {t.tsToDate}
        </div>
        <div className="flex gap-3 mb-3">
          <input type="text" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} placeholder={t.tsPlaceholder} className="flex-1" spellCheck={false} />
          <button onClick={tsToDate} className="btn btn-primary"><RefreshCw size={14} /> {t.convert}</button>
        </div>
        {tsToDateResult && (
          <div className="relative">
            <pre className="code-block bg-black/30 rounded-lg p-4 text-sm text-terminal-text">{tsToDateResult}</pre>
            <button onClick={() => copyText(tsToDateResult, "ts")} className="absolute top-2 right-2 text-terminal-muted hover:text-terminal-green transition-colors">
              {copied === "ts" ? <Check size={12} /> : <Copy size={12} />}
            </button>
          </div>
        )}
      </div>

      <div className="card">
        <div className="text-xs font-mono text-terminal-muted mb-3">
          <span className="text-terminal-green">&gt;</span> {t.dateToTs}
        </div>
        <div className="flex gap-3 mb-3">
          <input type="text" value={dateStr} onChange={(e) => setDateStr(e.target.value)} placeholder={t.datePlaceholder} className="flex-1" spellCheck={false} />
          <button onClick={dateToTs} className="btn btn-secondary"><RefreshCw size={14} /> {t.convert}</button>
        </div>
        {dateToTsResult && (
          <div className="relative">
            <pre className="code-block bg-black/30 rounded-lg p-4 text-sm text-terminal-text">{dateToTsResult}</pre>
            <button onClick={() => copyText(dateToTsResult, "date")} className="absolute top-2 right-2 text-terminal-muted hover:text-terminal-green transition-colors">
              {copied === "date" ? <Check size={12} /> : <Copy size={12} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
