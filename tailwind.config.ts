/**
 * Tailwind CSS Configuration
 * 
 * Konfigurasi untuk Tailwind CSS.
 * Termasuk:
 * - Content paths (file yang akan di-scan untuk classes)
 * - Custom colors
 * - Custom fonts
 * - Custom animations dan keyframes
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Ubah Custom Colors:
 *    - Baris 13-20: Edit warna primary dan secondary
 *    - Tambah warna baru: tertiary: { DEFAULT: '#...', light: '#...' }
 *    - Gunakan di component: className="bg-primary text-secondary"
 * 
 * 2. Ubah Font Family:
 *    - Baris 21-24: Edit font family
 *    - Tambah font baru: mono: ['var(--font-mono)', 'monospace']
 *    - Pastikan CSS variable didefinisikan di globals.css
 * 
 * 3. Tambah Custom Animation:
 *    - Baris 25-30: Tambah animation baru
 *    - Baris 31-48: Tambah keyframes untuk animation
 *    - Contoh: 'bounce-slow': 'bounceSlow 2s infinite'
 * 
 * 4. Tambah Content Paths:
 *    - Baris 5-9: Tambah path baru jika ada file di lokasi lain
 *    - Contoh: './src/**/*.{js,ts,jsx,tsx,mdx}'
 * 
 * 5. Tambah Tailwind Plugins:
 *    - Baris 49: Tambah plugin ke array
 *    - Contoh: plugins: [require('@tailwindcss/forms')]
 *    - Install plugin terlebih dahulu: npm install @tailwindcss/forms
 * 
 * 6. Ubah Theme Defaults:
 *    - Tambah di theme.extend untuk override default Tailwind
 *    - Contoh: borderRadius: { '4xl': '2rem' }
 * 
 * PENTING:
 * - Content paths menentukan file mana yang di-scan untuk Tailwind classes
 * - Jika menambah file di lokasi baru, tambah path di content
 * - Custom colors bisa digunakan dengan bg-primary, text-primary, dll
 * - Font variables harus didefinisikan di globals.css
 * - Animasi harus memiliki keyframes yang sesuai
 * 
 * DEPENDENCIES:
 * - tailwindcss: package utama
 * - CSS variables dari globals.css untuk fonts
 * 
 * @type {import('tailwindcss').Config}
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  // Content paths: file yang akan di-scan untuk Tailwind classes
  // KUSTOMISASI: Tambah path baru jika ada file di lokasi lain
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',           // Pages directory
    './components/**/*.{js,ts,jsx,tsx,mdx}',      // Components directory
    './app/**/*.{js,ts,jsx,tsx,mdx}',            // App directory (Next.js 13+)
  ],
  
  theme: {
    extend: {
      // Custom Colors
      // KUSTOMISASI: Ubah atau tambah warna baru di sini
      // Gunakan di component: className="bg-primary text-secondary"
      colors: {
        primary: {
          DEFAULT: '#000000',  // Warna primary default (hitam)
          light: '#1a1a1a',    // Warna primary light
        },
        secondary: {
          DEFAULT: '#ffffff',  // Warna secondary default (putih)
          dark: '#f5f5f5',     // Warna secondary dark
        },
        // Contoh tambah warna baru:
        // tertiary: {
        //   DEFAULT: '#3b82f6',
        //   light: '#60a5fa',
        //   dark: '#2563eb',
        // },
      },
      
      // Custom Font Families
      // KUSTOMISASI: Ubah atau tambah font baru di sini
      // Pastikan CSS variable didefinisikan di globals.css
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],  // Font sans-serif
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],  // Font display
        // Contoh tambah font baru:
        // mono: ['var(--font-mono)', 'monospace'],
      },
      
      // Custom Animations
      // KUSTOMISASI: Tambah animation baru di sini
      // Pastikan keyframes sudah didefinisikan di bawah
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        // Contoh tambah animation baru:
        // 'bounce-slow': 'bounceSlow 2s infinite',
      },
      
      // Custom Keyframes untuk Animations
      // KUSTOMISASI: Tambah keyframes baru untuk animation di atas
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        // Contoh tambah keyframes baru:
        // bounceSlow: {
        //   '0%, 100%': { transform: 'translateY(0)' },
        //   '50%': { transform: 'translateY(-10px)' },
        // },
      },
    },
  },
  
  // Tailwind Plugins
  // KUSTOMISASI: Tambah plugin baru di sini
  // Install plugin terlebih dahulu: npm install @tailwindcss/forms
  plugins: [],
  // Contoh: plugins: [require('@tailwindcss/forms')],
}

export default config

