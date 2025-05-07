/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'SSS 7526',
    description: 'SSS 7526 Kasm workspace registry.',
    icon: '/img/logo.svg',
    listUrl: 'https://sss7526.github.io/kasm-registry/',
    contactUrl: 'https://github.com/sss7526',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
