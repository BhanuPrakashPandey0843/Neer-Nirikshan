/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.wonderskool.com" },
      { protocol: "https", hostname: "1.bp.blogspot.com" },
      { protocol: "https", hostname: "global-uploads.webflow.com" },
      { protocol: "https", hostname: "cdn.dribbble.com" }
    ],
  },
};

export default nextConfig;
