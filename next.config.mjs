/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "familiesforlife.sg",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "thesmartlocal.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
