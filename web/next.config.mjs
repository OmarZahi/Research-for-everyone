/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/book', destination: '/sessions', permanent: true },
      { source: '/waiver', destination: '/consent', permanent: true },
      { source: '/incident', destination: '/incident-report', permanent: true },
      { source: '/media-kit', destination: '/media', permanent: true },
    ];
  },
};
export default nextConfig;
