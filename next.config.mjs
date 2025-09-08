/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',   
        hostname: 'api.builder.io', 
      },
    ],
  },
};

export default nextConfig;
