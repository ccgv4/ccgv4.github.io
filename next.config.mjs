// /** @type {import('next').NextConfig} */
// // const isProd = process.env.NODE_ENV === 'production';
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     unoptimized: true, // Disable default image optimization
//   },
//   assetPrefix: 'https://ccgv4.github.io/',
// //   basePath: '',
//   output: 'export',
//   distDir: 'docs'
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true, // Disable default image optimization
    },
    // assetPrefix: './',
    // basePath: '/.',
    output: 'export',
    distDir: 'docs'
  };
  
  export default nextConfig;
