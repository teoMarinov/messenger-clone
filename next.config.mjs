/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: [
        'next-superjson-plugin'
    ],
    images: {
        remotePatterns: [
          {
            hostname: 'avatars.githubusercontent.com'
          },
          {
            hostname: 'res.cloudinary.com',
          },
        //   {
        //     hostname: 'lh3.googleusercontent.com',
        //   }
        ],
      },
};

export default nextConfig;
