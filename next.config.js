/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      's.gravatar.com',
      'tailwindui.com',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      'loremflickr.com',
    ],
  },
};

module.exports = nextConfig;
