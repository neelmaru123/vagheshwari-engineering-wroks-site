import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // for static site — fast loading = better SEO
  trailingSlash: true,
  images: {
    unoptimized: true, // required if using static export
  },
};

export default nextConfig;
