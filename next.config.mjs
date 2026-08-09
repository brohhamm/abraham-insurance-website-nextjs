/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpackBuildWorker: false,
  },
  async redirects() {
    return [
      { source: "/wildfire-insurance", destination: "/education", permanent: true },
      { source: "/es/seguro-contra-incendios-forestales", destination: "/es/educacion", permanent: true },
    ];
  },
};

export default nextConfig;
