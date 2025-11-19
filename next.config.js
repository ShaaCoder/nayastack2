/** @type {import('next').NextConfig} */
const nextConfig = {
  output: '',

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },


  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },

};

module.exports = nextConfig;
