/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1294952-4705290.cloudwaysapps.com",
      },
    ],
  },
};

export default nextConfig;
