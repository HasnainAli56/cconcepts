/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cconcepts.eu',
      },
      {
        protocol: 'https',
        hostname: 'sp-ao.shortpixel.ai',
      },
      {
        protocol: 'http',
        hostname: 'cconcepts.eu',
      }
    ],
  },
};

export default nextConfig;
