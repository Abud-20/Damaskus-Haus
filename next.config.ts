import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Damaskus-Haus",
  images: {
    unoptimized: true,
    path: "/Damaskus-Haus/",
  },
};

export default nextConfig;
