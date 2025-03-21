import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'placehold.co',
      'i.imgur.com',
      'placeimg.com',
      // add more domains here if needed
    ],
  },
};

export default nextConfig;
