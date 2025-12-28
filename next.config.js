/**
 * Next.js Configuration File
 * 
 * Configuration for Next.js application.
 * Includes:
 * - Next-intl plugin for internationalization
 * - React strict mode
 * - Image optimization settings
 * 
 * EASY CUSTOMIZATION:
 * 
 * 1. Enable Image Optimization:
 *    - Lines 69-81: Remove or comment images config
 *    - Or change unoptimized: true to false
 *    - Add remotePatterns if using external images:
 *      images: {
 *        remotePatterns: [
 *          {
 *            protocol: 'https',
 *            hostname: 'example.com',
 *          },
 *        ],
 *      }
 * 
 * 2. Add Environment Variables:
 *    - Add env: { ... } in nextConfig
 *    - Example: env: { CUSTOM_KEY: process.env.CUSTOM_KEY }
 * 
 * 3. Change Output Mode:
 *    - Add output: 'standalone' for Docker deployment
 *    - Or output: 'export' for static export
 * 
 * 4. Add Redirects:
 *    - Add async redirects() function
 *    - Example: redirects: async () => [{ source: '/old', destination: '/new', permanent: true }]
 * 
 * 5. Add Rewrites:
 *    - Add async rewrites() function
 *    - Example: rewrites: async () => [{ source: '/api/:path*', destination: '/api/:path*' }]
 * 
 * IMPORTANT:
 * - Do not remove withNextIntl wrapper (required for next-intl)
 * - reactStrictMode: true helps detect bugs (recommended to keep true)
 * - Image optimization is disabled to prevent errors with external images
 * - If using Next.js Image with external images, setup remotePatterns
 * 
 * DEPENDENCIES:
 * - next-intl/plugin: for internationalization support
 * - i18n.ts: i18n configuration loaded by plugin
 * 
 * @type {import('next').NextConfig}
 */

const createNextIntlPlugin = require('next-intl/plugin');

// Setup next-intl plugin with configuration from i18n.ts
// CUSTOMIZATION: Change path './i18n.ts' if i18n file is in different location
const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // React Strict Mode: helps detect bugs and issues in development
  // CUSTOMIZATION: Change to false if you don't want strict mode (not recommended)
  reactStrictMode: true,
  
  // Image Optimization Configuration
  // CUSTOMIZATION: Enable image optimization if using Next.js Image component
  // Disabled to prevent errors with non-existent external images
  images: {
    unoptimized: true,  // Disable image optimization
    // CUSTOMIZATION: If you want to enable, change to false and add remotePatterns:
    /*
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/images/**',
      },
    ],
    */
  },
  
  // CUSTOMIZATION: Add other configuration here
  // Example:
  // env: {
  //   CUSTOM_KEY: process.env.CUSTOM_KEY,
  // },
  // output: 'standalone', // For Docker deployment
}

// Export config with next-intl plugin
// IMPORTANT: Do not remove withNextIntl wrapper
module.exports = withNextIntl(nextConfig)
