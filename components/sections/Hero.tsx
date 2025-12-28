/**
 * Hero Section Component
 * 
 * Section utama di bagian atas halaman (above the fold).
 * Fitur:
 * - Headline utama dengan animasi fade-in
 * - Subtitle dan deskripsi
 * - Badge dengan icon (Innovative Solutions)
 * - Dua tombol CTA (Primary: Get Started, Secondary: Learn More)
 * - Animasi background gradient yang bergerak
 * - Scroll indicator di bagian bawah
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Ubah Teks Konten:
 *    - Edit messages/en.json dan messages/id.json → section "hero"
 *    - title: Headline utama (teks besar)
 *    - subtitle: Subheadline (teks sedang)
 *    - description: Deskripsi produk/layanan
 *    - ctaPrimary: Teks tombol utama (biasanya "Get Started")
 *    - ctaSecondary: Teks tombol sekunder (biasanya "Learn More")
 * 
 * 2. Ubah Badge Teks:
 *    - Baris 79: Ganti "Innovative Solutions" dengan teks badge Anda
 *    - Atau nonaktifkan badge dengan menghapus baris 75-81
 * 
 * 3. Ubah Link Tombol:
 *    - Baris 113: href="#pricing" → ganti dengan link tujuan tombol utama
 *    - Baris 135: href="#features" → ganti dengan link tujuan tombol sekunder
 * 
 * 4. Ubah Warna Background:
 *    - Baris 34: bg-gradient-to-br from-white via-gray-50 to-white
 *    - Contoh: from-blue-50 via-white to-blue-50 untuk biru muda
 * 
 * 5. Ubah Warna Tombol:
 *    - Baris 116: bg-gradient-to-r from-black via-gray-900 to-black (tombol utama)
 *    - Baris 138: border-2 border-black (tombol sekunder)
 * 
 * 6. Ubah Animasi:
 *    - Baris 10-31: Edit containerVariants dan itemVariants
 *    - duration: Durasi animasi (detik)
 *    - delay: Delay sebelum animasi mulai
 *    - staggerChildren: Delay antar item anak
 * 
 * 7. Ubah Background Animation:
 *    - Baris 40-63: Edit animasi background gradient
 *    - duration: Durasi rotasi (detik)
 *    - scale: Ukuran lingkaran gradient
 * 
 * 8. Nonaktifkan Scroll Indicator:
 *    - Hapus baris 144-162 jika tidak diinginkan
 * 
 * PENTING:
 * - Pastikan semua key translation (title, subtitle, dll) ada di messages/en.json dan messages/id.json
 * - Link href harus valid (#section-id atau URL lengkap)
 * - Background gradient harus kontras dengan teks untuk aksesibilitas
 * - Animasi bisa di-disable dengan mengganti motion.div dengan div biasa
 * 
 * DEPENDENCIES:
 * - next-intl: untuk multi-language support
 * - framer-motion: untuk animasi
 * - lucide-react: untuk icons (ArrowRight, Sparkles)
 * 
 * @returns {JSX.Element} Hero section component
 */

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  // Hook untuk mengambil terjemahan dari file messages → section "hero"
  const t = useTranslations('hero');

  // Variants untuk animasi container (mengatur timing animasi anak-anak)
  // KUSTOMISASI: Ubah nilai untuk mengatur kecepatan dan delay animasi
  const containerVariants = {
    hidden: { opacity: 0 },                    // State awal: invisible
    visible: {
      opacity: 1,                              // State akhir: visible
      transition: {
        staggerChildren: 0.2,                  // Delay 0.2s antar item anak
        delayChildren: 0.3,                    // Delay 0.3s sebelum animasi mulai
      },
    },
  };

  // Variants untuk animasi item individual (badge, title, subtitle, dll)
  // KUSTOMISASI: Ubah duration dan ease untuk efek animasi berbeda
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },            // Mulai dari bawah (30px) dan invisible
    visible: {
      opacity: 1,                              // Akhir: visible
      y: 0,                                    // Akhir: posisi normal
      transition: {
        duration: 0.6,                         // Durasi animasi 0.6 detik
        ease: [0.6, -0.05, 0.01, 0.99],       // Easing function (custom cubic bezier)
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-black/10 to-black/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-black/10 to-black/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge Section */}
          {/* KUSTOMISASI: Ganti teks "Innovative Solutions" atau nonaktifkan badge ini */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white rounded-full mb-8 shadow-lg"
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium">Innovative Solutions</span>
          </motion.div>

          {/* Main Title/Headline */}
          {/* KUSTOMISASI: Teks diambil dari messages/en.json → hero.title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-black leading-tight"
          >
            {t('title')}
          </motion.h1>

          {/* Subtitle */}
          {/* KUSTOMISASI: Teks diambil dari messages/en.json → hero.subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-black/70 mb-4 font-medium"
          >
            {t('subtitle')}
          </motion.p>

          {/* Description */}
          {/* KUSTOMISASI: Teks diambil dari messages/en.json → hero.description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-black/60 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t('description')}
          </motion.p>

          {/* CTA Buttons Section */}
          {/* KUSTOMISASI: Ubah href dan styling tombol di sini */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA Button (Get Started) */}
            {/* KUSTOMISASI: Ubah href="#pricing" dengan link tujuan Anda */}
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05, y: -2 }}  // Efek zoom dan naik saat hover
              whileTap={{ scale: 0.95 }}           // Efek tekan saat klik
              className="group relative px-8 py-4 bg-gradient-to-r from-black via-gray-900 to-black text-white font-semibold rounded-lg overflow-hidden flex items-center justify-center gap-2 min-w-[160px] shadow-lg"
            >
              {/* Teks tombol normal */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t('ctaPrimary')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Background putih yang slide saat hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white"
                initial={{ x: '-100%' }}           // Mulai dari kiri (off-screen)
                whileHover={{ x: 0 }}              // Slide ke kanan saat hover
                transition={{ duration: 0.3 }}
              />
              {/* Teks hitam yang muncul saat hover */}
              <span className="absolute inset-0 flex items-center justify-center gap-2 text-black opacity-0 group-hover:opacity-100 transition-opacity z-10">
                {t('ctaPrimary')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            {/* Secondary CTA Button (Learn More) */}
            {/* KUSTOMISASI: Ubah href="#features" dengan link tujuan Anda */}
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-black text-black font-semibold rounded-lg hover:bg-gradient-to-r hover:from-black hover:via-gray-900 hover:to-black hover:text-white transition-all duration-300 flex items-center justify-center min-w-[160px] bg-gradient-to-r from-white to-gray-50"
            >
              {t('ctaSecondary')}
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          {/* KUSTOMISASI: Hapus section ini jika tidak ingin menampilkan scroll indicator */}
          {/* Animasi mouse scroll indicator di bagian bawah */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }} // Muncul setelah 1.5s
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}              // Animasi naik-turun container
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-black rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}            // Animasi naik-turun dot
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-black rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

