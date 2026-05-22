/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Pick up replaced files in public/ during dev without stale cache
    minimumCacheTTL: process.env.NODE_ENV === "development" ? 0 : 60,
  },
};

module.exports = nextConfig;
