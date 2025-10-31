/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "Carlo2024",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "school",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "", // Add port if required, leave empty for default
        pathname: "/**", // Allows all paths under this hostname
      },
    ],
  },
  experimental: {
    appDir: true,
    swcMinify: true,
  },
};

module.exports = nextConfig;
