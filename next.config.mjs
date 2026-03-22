const nextConfig = {
  output: "export", // for static site — fast loading = better SEO
  trailingSlash: true,
  images: {
    unoptimized: true, // required if using static export
  },
};

export default nextConfig;
