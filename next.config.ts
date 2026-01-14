import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "solopreneur-tool.vercel.app",
          },
        ],
        destination: "https://solopreneur.sethylaleye.com/:path*",
        permanent: true,
      },
    ];
  },

};

export default nextConfig;
