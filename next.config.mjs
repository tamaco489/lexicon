// next.config.js
import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    domains: ['fonts.gstatic.com'],
  },
}

export default withContentlayer(nextConfig)
