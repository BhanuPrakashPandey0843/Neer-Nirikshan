/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.swfwmd.state.fl.us",
      },
      {
        protocol: "https",
        hostname: "shrimpcaresolutions.in",
      },
      {
        protocol: "https",
        hostname: "cdn3.vectorstock.com",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
      },
    ],
  },
};

export default nextConfig;
