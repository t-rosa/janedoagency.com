/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.datocms-assets.com'],
  },
  experimental: { images: { allowFutureImage: true }, optimizeCss: true },
}

module.exports = nextConfig
