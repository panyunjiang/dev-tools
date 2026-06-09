export type Locale = "zh" | "en";

export const i18n = {
  zh: {
    siteName: "开发者工具箱",
    siteDesc:
      "免费在线开发者工具箱 - JSON格式化、正则测试、Base64编解码、URL编解码、时间戳转换、Hash生成、颜色转换、Markdown预览。纯前端实现，数据不上传。",
    hero: {
      title: "开发者工具箱",
      line1: "# DevTools - Free online developer utilities",
      line2: "# All tools run 100% in your browser. No data is uploaded.",
      line3: "# Built with Next.js, TypeScript, Tailwind CSS",
    },
    about: {
      heading: "About DevTools",
      zh: "开发者工具箱（DevTools）是一个免费的在线开发者常用工具集合。所有工具均在浏览器端运行，不上传任何数据到服务器，保护您的隐私安全。支持 JSON 格式化、正则表达式测试、Base64 编解码、URL 编解码、Unix 时间戳转换、MD5/SHA 哈希生成、颜色空间转换、Markdown 实时预览等常用开发工具。",
      en: "DevTools is a free online collection of commonly used developer utilities. All tools run entirely in your browser — no data is ever uploaded to any server. Includes JSON formatter, regex tester, Base64 encoder/decoder, URL encoder/decoder, timestamp converter, hash generator, color converter, and Markdown previewer.",
    },
    tools: {
      json: { cmd: "json-format", desc: "JSON 格式化 / 压缩 / 校验" },
      regex: { cmd: "regex-test", desc: "正则表达式在线测试，高亮匹配" },
      base64: { cmd: "base64", desc: "Base64 编码 / 解码" },
      url: { cmd: "url-encode", desc: "URL 编码 / 解码" },
      timestamp: { cmd: "timestamp", desc: "Unix 时间戳与日期互转" },
      hash: { cmd: "hash-gen", desc: "MD5 / SHA1 / SHA256 哈希计算" },
      color: { cmd: "color-convert", desc: "HEX / RGB / HSL 颜色转换" },
      markdown: { cmd: "markdown", desc: "实时 Markdown 编辑 + 预览" },
    },
    nav: {
      json: "JSON",
      regex: "Regex",
      base64: "Base64",
      url: "URL",
      timestamp: "时间戳",
      hash: "Hash",
      color: "颜色",
      markdown: "Markdown",
      langSwitch: "EN",
    },
    footer: {
      cmd: 'All tools run locally in your browser',
      noData: 'No data uploaded',
    },
    common: {
      copy: "Copy",
      copied: "Copied!",
      input: "input",
      output: "output",
    },
    json: {
      format: "格式化",
      minify: "压缩",
      validate: "校验",
      inputLabel: "input.json",
      outputLabel: "output.json",
      placeholder: '{"key": "value", "array": [1, 2, 3]}',
      outputPlaceholder: "// Output will appear here",
      valid: "// ✅ Valid JSON",
    },
    regex: {
      patternLabel: "pattern",
      flagsLabel: "flags",
      testString: "test string",
      matches: "matches",
      matchDetails: "Match Details",
      matchPlaceholder: "Matched results will appear here",
      index: "index",
    },
    base64: {
      encodeMode: "编码模式",
      decodeMode: "解码模式",
      encode: "Encode",
      decode: "Decode",
      plainText: "plain text",
      base64String: "base64 string",
      base64Output: "base64 output",
      decodedText: "decoded text",
      encodePlaceholder: "Enter text to encode...",
      decodePlaceholder: "Enter Base64 to decode...",
      outputPlaceholder: "// Output will appear here",
    },
    url: {
      encodeMode: "编码模式",
      decodeMode: "解码模式",
      encode: "Encode",
      decode: "Decode",
      plainText: "plain text",
      encodedUrl: "encoded URL",
      encodedOutput: "encoded output",
      decodedText: "decoded text",
      encodePlaceholder: "Enter text to encode...",
      decodePlaceholder: "Enter encoded URL to decode...",
      outputPlaceholder: "// Output will appear here",
    },
    timestamp: {
      currentTs: "current timestamp",
      tsToDate: "timestamp → date",
      dateToTs: "date → timestamp",
      convert: "Convert",
      seconds: "Seconds",
      milliseconds: "Milliseconds",
      iso: "ISO",
      locale: "Locale",
      dateLabel: "Date",
      tsPlaceholder: "1700000000",
      datePlaceholder: "2025-01-01 12:00:00",
      invalidTs: "// Invalid timestamp",
      invalidDate: "// Invalid date",
    },
    hash: {
      inputLabel: "input",
      generate: "Generate Hashes",
      placeholder: "Enter text to hash...",
    },
    color: {
      hexLabel: "HEX",
      rgbLabel: "RGB",
      hslLabel: "HSL",
      copyHex: "Copy HEX",
      copyRgb: "Copy RGB",
      copyHsl: "Copy HSL",
      hexPlaceholder: "#000000",
      invalidHex: "Invalid HEX color",
    },
    markdown: {
      editor: "editor.md",
      preview: "preview",
      chars: "chars",
      copyText: "Copy Text",
      placeholder: "# Start writing markdown...",
      defaultMd: `# 你好 DevTools

## Markdown 预览

这是一个 **实时** Markdown 编辑器，带 *预览* 功能。

### 功能

- GitHub Flavored Markdown (GFM)
- 表格、任务列表、删除线
- 代码块

### 代码示例

\`\`\`javascript
const greeting = "你好, DevTools!";
console.log(greeting);
\`\`\`

### 表格

| 工具 | 描述 |
|------|------|
| JSON | 格式化与校验 |
| Regex | 正则测试 |
| Hash | 哈希生成 |

### 任务列表

- [x] 创建编辑器
- [x] 添加预览
- [ ] 部署上线

> 引用：所有工具在浏览器中运行。

---

由 DevTools 用心制作 ❤️`,
    },
  },
  en: {
    siteName: "DevTools",
    siteDesc:
      "Free online developer toolbox — JSON formatter, regex tester, Base64, URL encoder, timestamp converter, hash generator, color converter, Markdown preview. All tools run in your browser.",
    hero: {
      title: "Developer Toolbox",
      line1: "# DevTools - Free online developer utilities",
      line2: "# All tools run 100% in your browser. No data is uploaded.",
      line3: "# Built with Next.js, TypeScript, Tailwind CSS",
    },
    about: {
      heading: "About DevTools",
      zh: "DevTools is a free online collection of commonly used developer utilities. All tools run entirely in your browser — no data is ever uploaded to any server.",
      en: "DevTools is a free online collection of commonly used developer utilities. All tools run entirely in your browser — no data is ever uploaded to any server. Includes JSON formatter, regex tester, Base64 encoder/decoder, URL encoder/decoder, timestamp converter, hash generator, color converter, and Markdown previewer.",
    },
    tools: {
      json: { cmd: "json-format", desc: "Format / Minify / Validate JSON" },
      regex: { cmd: "regex-test", desc: "Regex testing with match highlighting" },
      base64: { cmd: "base64", desc: "Base64 encode / decode" },
      url: { cmd: "url-encode", desc: "URL encode / decode" },
      timestamp: { cmd: "timestamp", desc: "Unix timestamp ↔ date conversion" },
      hash: { cmd: "hash-gen", desc: "MD5 / SHA1 / SHA256 hash generation" },
      color: { cmd: "color-convert", desc: "HEX / RGB / HSL color conversion" },
      markdown: { cmd: "markdown", desc: "Live Markdown editor + preview" },
    },
    nav: {
      json: "JSON",
      regex: "Regex",
      base64: "Base64",
      url: "URL",
      timestamp: "Timestamp",
      hash: "Hash",
      color: "Color",
      markdown: "Markdown",
      langSwitch: "中",
    },
    footer: {
      cmd: "All tools run locally in your browser",
      noData: "No data uploaded",
    },
    common: {
      copy: "Copy",
      copied: "Copied!",
      input: "input",
      output: "output",
    },
    json: {
      format: "Format",
      minify: "Minify",
      validate: "Validate",
      inputLabel: "input.json",
      outputLabel: "output.json",
      placeholder: '{"key": "value", "array": [1, 2, 3]}',
      outputPlaceholder: "// Output will appear here",
      valid: "// ✅ Valid JSON",
    },
    regex: {
      patternLabel: "pattern",
      flagsLabel: "flags",
      testString: "test string",
      matches: "matches",
      matchDetails: "Match Details",
      matchPlaceholder: "Matched results will appear here",
      index: "index",
    },
    base64: {
      encodeMode: "Encode Mode",
      decodeMode: "Decode Mode",
      encode: "Encode",
      decode: "Decode",
      plainText: "plain text",
      base64String: "base64 string",
      base64Output: "base64 output",
      decodedText: "decoded text",
      encodePlaceholder: "Enter text to encode...",
      decodePlaceholder: "Enter Base64 to decode...",
      outputPlaceholder: "// Output will appear here",
    },
    url: {
      encodeMode: "Encode Mode",
      decodeMode: "Decode Mode",
      encode: "Encode",
      decode: "Decode",
      plainText: "plain text",
      encodedUrl: "encoded URL",
      encodedOutput: "encoded output",
      decodedText: "decoded text",
      encodePlaceholder: "Enter text to encode...",
      decodePlaceholder: "Enter encoded URL to decode...",
      outputPlaceholder: "// Output will appear here",
    },
    timestamp: {
      currentTs: "current timestamp",
      tsToDate: "timestamp → date",
      dateToTs: "date → timestamp",
      convert: "Convert",
      seconds: "Seconds",
      milliseconds: "Milliseconds",
      iso: "ISO",
      locale: "Locale",
      dateLabel: "Date",
      tsPlaceholder: "1700000000",
      datePlaceholder: "2025-01-01 12:00:00",
      invalidTs: "// Invalid timestamp",
      invalidDate: "// Invalid date",
    },
    hash: {
      inputLabel: "input",
      generate: "Generate Hashes",
      placeholder: "Enter text to hash...",
    },
    color: {
      hexLabel: "HEX",
      rgbLabel: "RGB",
      hslLabel: "HSL",
      copyHex: "Copy HEX",
      copyRgb: "Copy RGB",
      copyHsl: "Copy HSL",
      hexPlaceholder: "#000000",
      invalidHex: "Invalid HEX color",
    },
    markdown: {
      editor: "editor.md",
      preview: "preview",
      chars: "chars",
      copyText: "Copy Text",
      placeholder: "# Start writing markdown...",
      defaultMd: `# Hello DevTools

## Markdown Preview

This is a **live** markdown editor with *preview*.

### Features

- GitHub Flavored Markdown (GFM)
- Tables, task lists, strikethrough
- Code blocks with syntax hints

### Code Example

\`\`\`javascript
const greeting = "Hello, DevTools!";
console.log(greeting);
\`\`\`

### Table

| Tool | Description |
|------|-------------|
| JSON | Format & validate |
| Regex | Test patterns |
| Hash | Generate hashes |

### Task List

- [x] Create editor
- [x] Add preview
- [ ] Deploy

> Blockquote: All tools run in your browser.

---

Made with ❤️ by DevTools`,
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return i18n[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "zh";
}

export function getAlternatePath(pathname: string): string {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const zhPath = pathname.replace(/^\/en/, "") || "/";
    return zhPath;
  }
  return `/en${pathname === "/" ? "" : pathname}`;
}

export function getToolPath(tool: string, locale: Locale): string {
  return locale === "en" ? `/en/${tool}` : `/${tool}`;
}
