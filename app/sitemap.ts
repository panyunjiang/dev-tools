import type { MetadataRoute } from "next";

const baseUrl = "https://dev.aiv.yn.cn";

const tools = [
  { path: "json", priority: 0.9 },
  { path: "regex", priority: 0.9 },
  { path: "base64", priority: 0.8 },
  { path: "url", priority: 0.8 },
  { path: "timestamp", priority: 0.8 },
  { path: "hash", priority: 0.8 },
  { path: "color", priority: 0.8 },
  { path: "markdown", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const zhPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...tools.map((tool) => ({
      url: `${baseUrl}/${tool.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: tool.priority,
    })),
  ];

  const enPages = [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...tools.map((tool) => ({
      url: `${baseUrl}/en/${tool.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: tool.priority,
    })),
  ];

  return [...zhPages, ...enPages];
}
