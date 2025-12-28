const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable image optimization to prevent errors with external images
  images: {
    unoptimized: true,
  },
}

module.exports = withNextIntl(nextConfig)

