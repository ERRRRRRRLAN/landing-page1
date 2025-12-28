/**
 * Navigation Component
 * 
 * Komponen navigasi utama yang ditampilkan di bagian atas halaman.
 * Fitur:
 * - Logo/Brand name yang bisa diklik untuk kembali ke hero section
 * - Menu navigasi desktop dan mobile (responsive)
 * - Toggle bahasa (English/Indonesian)
 * - Background berubah saat scroll (dengan blur effect)
 * - Animasi smooth saat muncul dan hover
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Ubah Logo/Brand Name:
 *    - Baris 56-58: Ganti teks "LOGO" dengan nama brand Anda
 *    - Atau tambahkan gambar: <img src="/logo.png" alt="Logo" className="h-8" />
 * 
 * 2. Tambah/Kurangi Menu Item:
 *    - Baris 31-37: Edit array navItems
 *    - Format: { key: 'nama_key', href: '#section-id' }
 *    - Pastikan 'nama_key' ada di messages/en.json dan messages/id.json → section "nav"
 *    - Pastikan href mengarah ke id section yang ada (contoh: #hero, #features, dll)
 * 
 * 3. Ubah Warna Background Saat Scroll:
 *    - Baris 45: Edit kelas Tailwind bg-gradient-to-r
 *    - Contoh: from-blue-500/95 untuk biru, from-green-500/95 untuk hijau
 * 
 * 4. Ubah Warna Teks:
 *    - Baris 56: text-black → text-blue-600 (atau warna lain)
 *    - Baris 71: text-black → text-blue-600
 * 
 * 5. Ubah Animasi:
 *    - Baris 41-43: Edit initial, animate, transition untuk animasi masuk
 *    - Baris 70: Edit whileHover untuk efek hover
 * 
 * 6. Nonaktifkan Animasi (jika tidak diinginkan):
 *    - Ganti semua <motion.div> dengan <div>
 *    - Ganti semua <motion.a> dengan <a>
 *    - Hapus semua props animasi (initial, animate, whileHover, dll)
 * 
 * PENTING:
 * - Pastikan semua 'key' di navItems ada di file translation (messages/en.json dan messages/id.json)
 * - Jika menambah section baru, pastikan id section sesuai dengan href di navItems
 * - Logo link (#hero) harus mengarah ke section dengan id="hero"
 * 
 * DEPENDENCIES:
 * - next-intl: untuk multi-language support
 * - framer-motion: untuk animasi
 * - lucide-react: untuk icons (Menu, X)
 * 
 * @returns {JSX.Element} Navigation bar component
 */

'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  // Hook untuk mengambil terjemahan dari file messages
  const t = useTranslations('nav');
  
  // Hook untuk mendapatkan locale saat ini (en atau id)
  const locale = useLocale();
  
  // Router untuk navigasi programmatic
  const router = useRouter();
  
  // Pathname saat ini untuk routing
  const pathname = usePathname();
  
  // State untuk tracking apakah user sudah scroll (untuk mengubah background)
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State untuk toggle menu mobile (buka/tutup)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect untuk mendeteksi scroll dan mengubah background navigation
  // Background akan berubah setelah scroll 20px ke bawah
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup: hapus event listener saat component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi untuk toggle bahasa antara English dan Indonesian
  // Akan mengarahkan user ke URL dengan locale yang berbeda
  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'id' : 'en';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  // Array menu items untuk navigasi
  // KUSTOMISASI: Tambah/kurangi item di sini
  // Format: { key: 'nama_key', href: '#section-id' }
  // Pastikan 'nama_key' ada di messages/en.json dan messages/id.json → section "nav"
  const navItems = [
    { key: 'home', href: '#hero' },        // Home → Hero section
    { key: 'features', href: '#features' }, // Features section
    { key: 'testimonials', href: '#testimonials' }, // Testimonials section
    { key: 'pricing', href: '#pricing' },   // Pricing section
    { key: 'contact', href: '#contact' },   // Contact section
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-white/95 via-white/98 to-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          {/* KUSTOMISASI: Ganti "LOGO" dengan nama brand atau tambahkan gambar logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}  // Efek zoom saat hover
            whileTap={{ scale: 0.95 }}    // Efek tekan saat klik
            className="flex-shrink-0"
          >
            <a href="#hero" className="text-2xl font-bold text-black">
              LOGO
            </a>
            {/* Contoh dengan gambar: 
                <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            */}
          </motion.div>

          {/* Desktop Navigation Menu */}
          {/* Menu ini hanya terlihat di desktop (hidden di mobile, muncul di md ke atas) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-black hover:text-black/70 font-medium transition-colors relative group"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            
            {/* Language Toggle Button */}
            {/* Tombol untuk switch antara English dan Indonesian */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white font-medium rounded-lg hover:bg-gradient-to-r hover:from-gray-800 hover:to-black transition-all duration-300 shadow-md"
              aria-label="Toggle language"
            >
              {/* Tampilkan "ID" jika locale English, "EN" jika Indonesian */}
              {locale === 'en' ? 'ID' : 'EN'}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle Button */}
          {/* Tombol hamburger menu yang hanya terlihat di mobile (md:hidden) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {/* Tampilkan icon X jika menu terbuka, icon Menu jika tertutup */}
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Menu dropdown yang muncul saat tombol hamburger diklik di mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}      // Mulai dari invisible dan height 0
            animate={{ opacity: 1, height: 'auto' }} // Animasi ke visible dan auto height
            exit={{ opacity: 0, height: 0 }}          // Animasi keluar
            transition={{ duration: 0.3 }}              // Durasi animasi 0.3 detik
            className="md:hidden bg-white border-t border-black/10"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Render semua menu items */}
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)} // Tutup menu saat item diklik
                  whileHover={{ x: 5 }} // Efek slide ke kanan saat hover
                  className="block text-black font-medium hover:text-black/70 transition-colors"
                >
                  {/* Tampilkan teks dari translation file */}
                  {t(item.key)}
                </motion.a>
              ))}
              {/* Language Toggle Button untuk Mobile */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false); // Tutup menu setelah switch language
                }}
                className="w-full px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white font-medium rounded-lg hover:bg-gradient-to-r hover:from-gray-800 hover:to-black transition-all duration-300 shadow-md"
              >
                {locale === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

