import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Damaskus-Haus",
  assetPrefix: "/Damaskus-Haus/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
