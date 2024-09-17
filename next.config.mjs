/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["images.unsplash.com", "www.pexels.com", "assets.aceternity.com"], // Add the domain here
  },
};

export default nextConfig;
