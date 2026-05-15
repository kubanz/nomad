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
        source: "/en/almaty-to-karakol",
        destination: "/transfers/almaty-to-karakol",
        permanent: true,
      },
      {
        source: "/en/almaty-to-karakol.html",
        destination: "/transfers/almaty-to-karakol",
        permanent: true,
      },
      {
        source: "/ru/almaty-to-karakol",
        destination: "/ru/transfers/almaty-to-karakol",
        permanent: true,
      },
      {
        source: "/ru/almaty-to-karakol.html",
        destination: "/ru/transfers/almaty-to-karakol",
        permanent: true,
      },
      {
        source: "/ko/almaty-to-karakol",
        destination: "/ko/transfers/almaty-to-karakol",
        permanent: true,
      },
      {
        source: "/ko/almaty-to-karakol.html",
        destination: "/ko/transfers/almaty-to-karakol",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
