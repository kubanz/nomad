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
        source: "/en/karakol-ski-resort-guide",
        destination: "/guides/karakol-ski-resort",
        permanent: true,
      },
      {
        source: "/en/karakol-ski-resort-guide.html",
        destination: "/guides/karakol-ski-resort",
        permanent: true,
      },
      {
        source: "/ru/karakol-gornolyzhnaya-baza",
        destination: "/ru/guides/karakol-ski-resort",
        permanent: true,
      },
      {
        source: "/ru/karakol-gornolyzhnaya-baza.html",
        destination: "/ru/guides/karakol-ski-resort",
        permanent: true,
      },
      {
        source: "/ko/karakol-ski-resort",
        destination: "/ko/guides/karakol-ski-resort",
        permanent: true,
      },
      {
        source: "/ko/karakol-ski-resort.html",
        destination: "/ko/guides/karakol-ski-resort",
        permanent: true,
      },
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
      {
        source: "/en/bishkek-to-karakol",
        destination: "/transfers/bishkek-to-karakol",
        permanent: true,
      },
      {
        source: "/en/bishkek-to-karakol.html",
        destination: "/transfers/bishkek-to-karakol",
        permanent: true,
      },
      {
        source: "/ru/bishkek-to-karakol",
        destination: "/ru/transfers/bishkek-to-karakol",
        permanent: true,
      },
      {
        source: "/ru/bishkek-to-karakol.html",
        destination: "/ru/transfers/bishkek-to-karakol",
        permanent: true,
      },
      {
        source: "/ko/bishkek-to-karakol",
        destination: "/ko/transfers/bishkek-to-karakol",
        permanent: true,
      },
      {
        source: "/ko/bishkek-to-karakol.html",
        destination: "/ko/transfers/bishkek-to-karakol",
        permanent: true,
      },
      {
        source: "/en/manas-karakol-transfer",
        destination: "/transfers/manas-airport-to-karakol",
        permanent: true,
      },
      {
        source: "/en/manas-karakol-transfer.html",
        destination: "/transfers/manas-airport-to-karakol",
        permanent: true,
      },
      {
        source: "/en/manas-airport-to-karakol",
        destination: "/transfers/manas-airport-to-karakol",
        permanent: true,
      },
      {
        source: "/en/manas-airport-to-karakol.html",
        destination: "/transfers/manas-airport-to-karakol",
        permanent: true,
      },
      {
        source: "/ru/manas-karakol-transfer",
        destination: "/ru/transfers/manas-airport-to-karakol",
        permanent: true,
      },
      {
        source: "/ru/manas-karakol-transfer.html",
        destination: "/ru/transfers/manas-airport-to-karakol",
        permanent: true,
      },
      {
        source: "/ru/manas-airport-to-karakol",
        destination: "/ru/transfers/manas-airport-to-karakol",
        permanent: true,
      },
      {
        source: "/ru/manas-airport-to-karakol.html",
        destination: "/ru/transfers/manas-airport-to-karakol",
        permanent: true,
      },
      {
        source: "/ko/manas-karakol-transfer",
        destination: "/ko/transfers/manas-airport-to-karakol",
        permanent: true,
      },
      {
        source: "/ko/manas-karakol-transfer.html",
        destination: "/ko/transfers/manas-airport-to-karakol",
        permanent: true,
      },
      {
        source: "/ko/manas-airport-to-karakol",
        destination: "/ko/transfers/manas-airport-to-karakol",
        permanent: true,
      },
      {
        source: "/ko/manas-airport-to-karakol.html",
        destination: "/ko/transfers/manas-airport-to-karakol",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
