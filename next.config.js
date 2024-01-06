/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*mp3quran.net',
        port: '',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig

