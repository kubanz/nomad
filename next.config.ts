import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "59luetpw6qj9z6yg.public.blob.vercel-storage.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/en/almaty-to-karakol.html",
        destination: "/en/almaty-to-karakol",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
