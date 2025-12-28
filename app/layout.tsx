/**
 * Root Layout Component
 * 
 * Layout root untuk seluruh aplikasi Next.js.
 * Fitur:
 * - Mengatur font (Inter dari Google Fonts)
 * - Mengatur metadata SEO (title, description, keywords, Open Graph)
 * - Mengatur viewport untuk responsive
 * - Mengatur global styles
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Ubah SEO Metadata:
 *    - Baris 11-25: Edit semua metadata untuk SEO
 *    - title: Judul halaman (muncul di browser tab dan search results)
 *    - description: Deskripsi halaman (muncul di search results)
 *    - keywords: Kata kunci untuk SEO (pisahkan dengan koma)
 *    - authors: Nama author/perusahaan
 *    - openGraph: Metadata untuk social media sharing (Facebook, Twitter, dll)
 *    - robots: Aturan untuk search engine crawler
 * 
 * 2. Ubah Font:
 *    - Baris 5-9: Import font berbeda dari Google Fonts
 *    - Contoh: import { Roboto } from 'next/font/google'
 *    - Ganti Inter dengan Roboto
 *    - Atau gunakan font lokal dengan @font-face di globals.css
 * 
 * 3. Ubah Warna Background Global:
 *    - Baris 40: bg-white → bg-gray-50 atau warna lain
 *    - Atau ubah di globals.css untuk lebih fleksibel
 * 
 * 4. Ubah Warna Teks Global:
 *    - Baris 40: text-black → text-gray-900 atau warna lain
 * 
 * 5. Tambah Font Lain:
 *    - Import font baru (contoh: import { Poppins } from 'next/font/google')
 *    - Tambah ke className body jika diperlukan
 * 
 * 6. Ubah Language HTML:
 *    - Baris 39: lang="en" → lang="id" atau lang lainnya
 *    - Atau buat dinamis berdasarkan locale
 * 
 * PENTING:
 * - Metadata sangat penting untuk SEO, pastikan diisi dengan benar
 * - Title sebaiknya maksimal 60 karakter
 * - Description sebaiknya maksimal 160 karakter
 * - Open Graph image bisa ditambahkan di openGraph.images
 * - Viewport harus terpisah (Next.js 14 requirement)
 * - Font variable (--font-inter) digunakan di Tailwind config
 * 
 * DEPENDENCIES:
 * - next/font/google: untuk Google Fonts
 * - globals.css: untuk global styles
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components
 * @returns {JSX.Element} Root layout dengan HTML structure
 */

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Konfigurasi font Inter dari Google Fonts
// KUSTOMISASI: Ganti dengan font lain jika diinginkan
const inter = Inter({ 
  subsets: ['latin'],           // Subset karakter yang di-load
  variable: '--font-inter',    // CSS variable name (digunakan di Tailwind)
  display: 'swap',              // Font display strategy (swap = tampilkan fallback dulu)
});

/**
 * SEO Metadata
 * KUSTOMISASI: Edit semua metadata untuk SEO yang lebih baik
 * Pastikan title dan description relevan dengan konten website
 */
export const metadata: Metadata = {
  // Title halaman (muncul di browser tab dan search results)
  // KUSTOMISASI: Ganti dengan title yang relevan
  title: 'Transform Your Business | Innovative Solutions',
  
  // Deskripsi halaman (muncul di search results)
  // KUSTOMISASI: Ganti dengan deskripsi yang relevan (maksimal 160 karakter)
  description: 'Discover innovative products and services designed to empower your success. Built for the community, driven by excellence.',
  
  // Keywords untuk SEO (pisahkan dengan koma)
  // KUSTOMISASI: Ganti dengan keywords yang relevan
  keywords: 'business solutions, innovation, community, technology',
  
  // Author/Perusahaan
  // KUSTOMISASI: Ganti dengan nama author/perusahaan Anda
  authors: [{ name: 'Your Company' }],
  
  // Open Graph metadata (untuk social media sharing)
  // KUSTOMISASI: Tambah images jika diperlukan
  openGraph: {
    title: 'Transform Your Business | Innovative Solutions',
    description: 'Discover innovative products and services designed to empower your success.',
    type: 'website',
    // images: [{ url: '/og-image.jpg' }], // Uncomment dan tambah OG image
  },
  
  // Aturan untuk search engine crawler
  robots: {
    index: true,   // Izinkan indexing
    follow: true,  // Izinkan follow links
  },
};

/**
 * Viewport Configuration
 * PENTING: Harus terpisah dari metadata (Next.js 14 requirement)
 * KUSTOMISASI: Ubah jika diperlukan untuk responsive behavior berbeda
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* KUSTOMISASI: Ubah lang="en" dengan bahasa default Anda */}
      {/* scroll-smooth: Smooth scroll behavior untuk anchor links */}
      <body className={`${inter.variable} font-sans antialiased bg-white text-black`}>
        {/* 
          inter.variable: CSS variable untuk font (digunakan di Tailwind)
          font-sans: Font family sans-serif
          antialiased: Smooth font rendering
          bg-white: Background putih
          text-black: Teks hitam
        */}
        {children}
      </body>
    </html>
  );
}

