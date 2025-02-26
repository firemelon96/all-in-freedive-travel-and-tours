import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: 'http://www.allintravelandfreedivingtourservices.com/',
        destination: 'https://www.allinfreedivingandtourservices.com/',
        permanent: true, // 301 redirect
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
