// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     eslint: {
//       ignoreDuringBuilds: true, // Use if ESLint errors are blocking deployment
//     },
//     // Add more configuration options
//     poweredByHeader: false, // Remove the `X-Powered-By` header
//     compress: true, // Enable gzip compression
//     i18n: {
//       locales: ['en'],
//       defaultLocale: 'en',
//     },
//     images: {
//       domains: ['example.com'], // Add domains for next/image
//     },
//     async headers() {
//       return [
//         {
//           source: '/(.*)',
//           headers: [
//             {
//               key: 'X-Frame-Options',
//               value: 'DENY',
//             },
//             {
//               key: 'X-Content-Type-Options',
//               value: 'nosniff',
//             },
//             {
//               key: 'Referrer-Policy',
//               value: 'strict-origin-when-cross-origin',
//             },
//           ],
//         },
//       ];
//     },
//   }; 
//   export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;