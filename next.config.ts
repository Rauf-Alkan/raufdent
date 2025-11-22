import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unsplash görsellerine izin veriyoruz
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
    // Eğer build sırasında resim hatası alırsan alttaki satırın yorumunu kaldır:
    // unoptimized: true, 
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;