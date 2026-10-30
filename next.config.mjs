/** Static export: `npm run build` writes the whole site to out/ as plain HTML, CSS and JS. */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
