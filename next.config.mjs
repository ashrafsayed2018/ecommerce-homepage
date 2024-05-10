/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://scontent.cdninstagram.com",
      },
    ],
  },
};

export default nextConfig;
