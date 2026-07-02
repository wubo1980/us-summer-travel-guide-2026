import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/national-parks-budget",
        destination: "/articles/national-parks-2026-summer-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
// Analytics enabled
