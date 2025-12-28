/**
 * Next.js Configuration File
 * 
 * Konfigurasi untuk Next.js application.
 * Termasuk:
 * - Next-intl plugin untuk internationalization
 * - React strict mode
 * - Image optimization settings
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Enable Image Optimization:
 *    - Baris 10-12: Hapus atau comment images config
 *    - Atau ubah unoptimized: true menjadi false
 *    - Tambah remotePatterns jika menggunakan external images:
 *      images: {
 *        remotePatterns: [
 *          {
 *            protocol: 'https',
 *            hostname: 'example.com',
 *          },
 *        ],
 *      }
 * 
 * 2. Tambah Environment Variables:
 *    - Tambah env: { ... } di nextConfig
 *    - Contoh: env: { CUSTOM_KEY: process.env.CUSTOM_KEY }
 * 
 * 3. Ubah Output Mode:
 *    - Tambah output: 'standalone' untuk Docker deployment
 *    - Atau output: 'export' untuk static export
 * 
 * 4. Tambah Redirects:
 *    - Tambah async redirects() function
 *    - Contoh: redirects: async () => [{ source: '/old', destination: '/new', permanent: true }]
 * 
 * 5. Tambah Rewrites:
 *    - Tambah async rewrites() function
 *    - Contoh: rewrites: async () => [{ source: '/api/:path*', destination: '/api/:path*' }]
 * 
 * PENTING:
 * - Jangan hapus withNextIntl wrapper (diperlukan untuk next-intl)
 * - reactStrictMode: true membantu detect bugs (disarankan tetap true)
 * - Image optimization di-disable untuk mencegah error dengan external images
 * - Jika menggunakan Next.js Image dengan external images, setup remotePatterns
 * 
 * DEPENDENCIES:
 * - next-intl/plugin: untuk internationalization support
 * - i18n.ts: konfigurasi i18n yang di-load oleh plugin
 * 
 * @type {import('next').NextConfig}
 */

const createNextIntlPlugin = require('next-intl/plugin');

// Setup next-intl plugin dengan konfigurasi dari i18n.ts
// KUSTOMISASI: Ubah path './i18n.ts' jika file i18n berada di lokasi berbeda
const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // React Strict Mode: membantu detect bugs dan masalah di development
  // KUSTOMISASI: Ubah ke false jika tidak ingin strict mode (tidak direkomendasikan)
  reactStrictMode: true,
  
  // Image Optimization Configuration
  // KUSTOMISASI: Enable image optimization jika menggunakan Next.js Image component
  // Disable untuk mencegah error dengan external images yang tidak ada
  images: {
    unoptimized: true,  // Disable image optimization
    // KUSTOMISASI: Jika ingin enable, ubah ke false dan tambah remotePatterns:
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
  
  // KUSTOMISASI: Tambah konfigurasi lain di sini
  // Contoh:
  // env: {
  //   CUSTOM_KEY: process.env.CUSTOM_KEY,
  // },
  // output: 'standalone', // Untuk Docker deployment
}

// Export config dengan next-intl plugin
// PENTING: Jangan hapus withNextIntl wrapper
module.exports = withNextIntl(nextConfig)

