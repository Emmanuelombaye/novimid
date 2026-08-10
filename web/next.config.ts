import type { NextConfig } from "next";
import path from "path";

const oneYear = "public, max-age=31536000, immutable";
const oneHour = "public, max-age=3600, must-revalidate";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 430, 640, 750, 828, 1080, 1200, 1536, 1920],
    imageSizes: [96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days for optimized images
    qualities: [70, 72, 75, 78, 80, 82, 85, 90],
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: oneHour }],
      },
      {
        source: "/brand/:path*",
        headers: [{ key: "Cache-Control", value: oneYear }],
      },
    ];
  },
};

export default nextConfig;
