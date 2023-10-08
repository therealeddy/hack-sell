/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: ['files.stripe.com'],
  },
}

module.exports = nextConfig
