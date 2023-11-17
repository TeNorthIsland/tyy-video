/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compress: false,
  images: {
    loader: 'custom',
    loaderFile: './ImgLoader.js',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
