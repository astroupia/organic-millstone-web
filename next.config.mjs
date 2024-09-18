/** @type {import('next').NextConfig} */
const nextConfig = {
  exportTrailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "www.pexels.com", "assets.aceternity.com"], // Add the domain here
  },
};

export default nextConfig;
