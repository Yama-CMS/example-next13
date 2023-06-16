const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true
}

module.exports = withContentlayer(nextConfig)
