/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
    domains: ['images.microcms-assets.io'],
  },
}

module.exports = nextConfig
