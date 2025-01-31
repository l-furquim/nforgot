import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['github.com'],  // Permite imagens de github.com
  },
  reactStrictMode: false,
};

export default nextConfig;
