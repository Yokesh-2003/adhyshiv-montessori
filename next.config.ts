import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Pick up replaced files in public/ during dev without stale cache
    minimumCacheTTL: process.env.NODE_ENV === "development" ? 0 : 60,
  },
};

export default nextConfig;
