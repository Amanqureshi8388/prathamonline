/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.prathamonline.com',
            port: '',
            pathname: '/images/slider/cuet-banner.png',
          },
        ],
      },
}

module.exports = nextConfig
