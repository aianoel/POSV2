/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Enable static exports
  trailingSlash: true, // Add trailing slashes to all URLs
  images: {
    unoptimized: true, // Disable image optimization for static export
  }
};

module.exports = nextConfig; 