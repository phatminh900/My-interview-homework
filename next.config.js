/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "themes-themegoods.b-cdn.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "live.staticflickr.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
