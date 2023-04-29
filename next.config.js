/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['raw.githubusercontent.com', 'giphy.com'],
  },
};

module.exports = nextConfig;
