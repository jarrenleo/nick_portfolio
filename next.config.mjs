const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hrtbkhxwperxcpdnwgzz.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "familiesforlife.sg",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thesmartlocal.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
