// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       'www.notion.so',
//       'images.unsplash.com',
//       's3.us-west-2.amazonaws.com',
//     ],
//     format: ['image/png', 'image/webp', 'image/jpeg'],
//   },
// };

// module.exports = nextConfig;

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
    ],
    format: ['image/png', 'image/webp', 'image/jpeg'],
  },
};
