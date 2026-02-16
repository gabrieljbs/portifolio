/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        cacheComponents: true,
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'drive.google.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.simpleicons.org',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'media.graphassets.com', // Caso use Hygraph ou similar
            }
        ],
    },
};

export default nextConfig;
