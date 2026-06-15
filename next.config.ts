import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve next-gen formats; AVIF first, WebP fallback.
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 30 days at the CDN/edge.
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "www.google.com" },
    ],
  },
};

export default nextConfig;
