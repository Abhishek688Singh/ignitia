/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
