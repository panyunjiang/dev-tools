"use client";

import { useState, useCallback } from "react";
import { Palette, Copy, Check, AlertCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { i18n } from "@/lib/i18n";

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return null;
  return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map(v => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0")).join("");
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h /= 360; s /= 100; l /= 100;
  let r: number, g: number, b: number;
  if (s === 0) { r = g = b = l; } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1; if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

export default function ColorTool({ locale = "zh" }: { locale?: Locale }) {
  const t = i18n[locale].color;
  const [hex, setHex] = useState("#00d4aa");
  const [rgb, setRgb] = useState({ r: 0, g: 212, b: 170 });
  const [hsl, setHsl] = useState({ h: 168, s: 100, l: 42 });
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const updateFromHex = useCallback((val: string) => {
    setHex(val);
    const c = hexToRgb(val);
    if (c) { setRgb(c); setHsl(rgbToHsl(c.r, c.g, c.b)); setError(""); }
    else if (val.length === 7) { setError(t.invalidHex); }
  }, [t.invalidHex]);

  const updateFromRgb = useCallback((r: number, g: number, b: number) => {
    const newRgb = { r: Math.max(0, Math.min(255, r)), g: Math.max(0, Math.min(255, g)), b: Math.max(0, Math.min(255, b)) };
    setRgb(newRgb); setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b)); setHsl(rgbToHsl(newRgb.r, newRgb.g, newRgb.b)); setError("");
  }, []);

  const updateFromHsl = useCallback((h: number, s: number, l: number) => {
    const newHsl = { h: ((h % 360) + 360) % 360, s: Math.max(0, Math.min(100, s)), l: Math.max(0, Math.min(100, l)) };
    setHsl(newHsl);
    const c = hslToRgb(newHsl.h, newHsl.s, newHsl.l);
    setRgb(c); setHex(rgbToHex(c.r, c.g, c.b)); setError("");
  }, []);

  const copyVal = (label: string, val: string) => {
    navigator.clipboard.writeText(val); setCopied(label); setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center gap-2 mb-6">
        <Palette size={16} className="text-terminal-purple" />
        <span className="font-mono text-sm text-terminal-green">color-convert</span>
        <span className="text-terminal-muted font-mono text-xs">--hex|--rgb|--hsl</span>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg border border-red-500/30 bg-red-500/10 flex items-center gap-2 font-mono text-xs text-red-400">
          <AlertCircle size={14} /> {error}
        </div>
      )}

      <div className="card mb-6">
        <div className="color-preview-box" style={{ backgroundColor: hex }} />
        <div className="mt-3 flex items-center gap-3">
          <span className="font-mono text-lg text-terminal-green">{hex}</span>
          <button onClick={() => copyVal("hex", hex)} className="text-terminal-muted hover:text-terminal-green">
            {copied === "hex" ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <div className="text-xs font-mono text-terminal-purple mb-3">{t.hexLabel}</div>
          <input type="text" value={hex} onChange={(e) => updateFromHex(e.target.value)} placeholder={t.hexPlaceholder} spellCheck={false} />
          <button onClick={() => copyVal("hexv", hex)} className="btn btn-ghost w-full mt-3 justify-center">
            {copied === "hexv" ? <Check size={12} /> : <Copy size={12} />}
            {copied === "hexv" ? "Copied!" : t.copyHex}
          </button>
        </div>

        <div className="card">
          <div className="text-xs font-mono text-terminal-purple mb-3">{t.rgbLabel}</div>
          <div className="space-y-2">
            {(["r", "g", "b"] as const).map((ch) => (
              <div key={ch} className="flex items-center gap-2">
                <span className="text-xs font-mono text-terminal-muted w-4">{ch.toUpperCase()}</span>
                <input type="number" min={0} max={255} value={rgb[ch]}
                  onChange={(e) => updateFromRgb(ch === "r" ? Number(e.target.value) : rgb.r, ch === "g" ? Number(e.target.value) : rgb.g, ch === "b" ? Number(e.target.value) : rgb.b)}
                  className="flex-1" />
              </div>
            ))}
          </div>
          <button onClick={() => copyVal("rgb", `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)} className="btn btn-ghost w-full mt-3 justify-center">
            {copied === "rgb" ? <Check size={12} /> : <Copy size={12} />}
            {copied === "rgb" ? "Copied!" : t.copyRgb}
          </button>
        </div>

        <div className="card">
          <div className="text-xs font-mono text-terminal-purple mb-3">{t.hslLabel}</div>
          <div className="space-y-2">
            {([{ key: "h" as const, label: "H", max: 360 }, { key: "s" as const, label: "S", max: 100 }, { key: "l" as const, label: "L", max: 100 }]).map(({ key, label, max }) => (
              <div key={key} className="flex items-center gap-2">
                <span className="text-xs font-mono text-terminal-muted w-4">{label}</span>
                <input type="number" min={0} max={max} value={hsl[key]}
                  onChange={(e) => updateFromHsl(key === "h" ? Number(e.target.value) : hsl.h, key === "s" ? Number(e.target.value) : hsl.s, key === "l" ? Number(e.target.value) : hsl.l)}
                  className="flex-1" />
              </div>
            ))}
          </div>
          <button onClick={() => copyVal("hsl", `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)} className="btn btn-ghost w-full mt-3 justify-center">
            {copied === "hsl" ? <Check size={12} /> : <Copy size={12} />}
            {copied === "hsl" ? "Copied!" : t.copyHsl}
          </button>
        </div>
      </div>
    </div>
  );
}
