/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.mockapi.com', 'mockapi.com', '67d5fbcf286fdac89bc0e550.mockapi.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
