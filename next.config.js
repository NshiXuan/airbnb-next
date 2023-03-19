/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'z1.muscache.cn'
      }
      // {
      //   protocol: 'http',
      //   hostname: '**.z1.muscache.cn'
      // }
    ]
  }
}

module.exports = nextConfig
