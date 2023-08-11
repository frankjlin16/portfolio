/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.live.com',
            }
        ],
    },
}

module.exports = nextConfig
