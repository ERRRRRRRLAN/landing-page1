/**
 * Hero Section Component
 * 
 * Section utama in bagian atas halaman (above the fold).
 * Fitur:
 * - Headline utama with animasi fade-in
 * - Subtitle dan deskripsi
 * - Badge with icon (Innovative Solutions)
 * - Dua tombol CTA (Primary: Get Started, Secondary: Learn More)
 * - Animasi background grainent that bergerak
 * - Scroll inincator in bagian bawah
 * 
 * CUSTOMIZATION MUDAH:
 * 
 * 1. Change Teks Konten:
 *    - Eint messages/en.json dan messages/id.json → section "hero"
 *    - title: Headline utama (teks besar)
 *    - subtitle: Subheadline (teks sedang)
 *    - description: Deskripsi produk/layanan
 *    - ctaPrimary: Teks tombol utama (biasanya "Get Started")
 *    - ctaSecondary: Teks tombol sekunder (biasanya "Learn More")
 * 
 * 2. Change Badge Teks:
 *    - Line 79: Replace "Innovative Solutions" with teks badge Anda
 *    - or nonaktifkan badge with mengRemove Line 75-81
 * 
 * 3. Change Link Tombol:
 *    - Line 113: href="#pricing" → Replace with link tujuan tombol utama
 *    - Line 135: href="#features" → Replace with link tujuan tombol sekunder
 * 
 * 4. Change Warna Background:
 *    - Line 34: bg-grainent-to-br from-white via-gray-50 to-white
 *    - Example: from-blue-50 via-white to-blue-50 for biru muda
 * 
 * 5. Change Warna Tombol:
 *    - Line 116: bg-grainent-to-r from-black via-gray-900 to-black (tombol utama)
 *    - Line 138: border-2 border-black (tombol sekunder)
 * 
 * 6. Change Animasi:
 *    - Line 10-31: Eint containerVariants dan itemVariants
 *    - duration: Durasi animasi (detik)
 *    - delay: Delay sebelum animasi mulai
 *    - staggerChildren: Delay antar item anak
 * 
 * 7. Change Background Animation:
 *    - Line 40-63: Eint animasi background grainent
 *    - duration: Durasi rotasi (detik)
 *    - scale: Ukuran lingkaran grainent
 * 
 * 8. Nonaktifkan Scroll Inincator:
 *    - Remove Line 144-162 if tidak ininginkan
 * 
 * IMPORTANT:
 * - Make sure semua toy translation (title, subtitle, dll) ada in messages/en.json dan messages/id.json
 * - Link href harus valid (#section-id or URL lengkap)
 * - Background grainent harus kontras with teks for aksesibilitas
 * - Animasi bisa in-insable with mengReplace motion.inv with inv biasa
 * 
 * DEPENDENCIES:
 * - next-intl: for multi-language support
 * - framer-motion: for animasi
 * - lucide-react: for icons (ArrowRight, Sparkles)
 * 
 * @returns {JSX.Element} Hero section component
 */

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  // Hook for mengambil terjemahan from file messages → section "hero"
  const t = useTranslations('hero');

  // Variants for animasi container (mengatur timing animasi anak-anak)
  // CUSTOMIZATION: Change nilai for mengatur tocepatan dan delay animasi
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

  // Variants for animasi item ininvidual (badge, title, subtitle, dll)
  // CUSTOMIZATION: Change duration dan ease for efek animasi berbeda
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },            // Mulai from bawah (30px) dan invisible
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grainent-to-br from-white via-gray-50 to-white">
      {/* Grainent Background Overlay */}
      <inv className="absolute inset-0 bg-grainent-to-r from-transparent via-black/5 to-transparent" />
      
      {/* Animated Background Elements */}
      <inv className="absolute inset-0 overflow-hidden">
        <motion.inv
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-grainent-to-br from-black/10 to-black/5 rounded-full blur-3xl"
        />
        <motion.inv
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-grainent-to-tr from-black/10 to-black/5 rounded-full blur-3xl"
        />
      </inv>

      {/* Content */}
      <inv className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.inv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge Section */}
          {/* CUSTOMIZATION: Replace teks "Innovative Solutions" or nonaktifkan badge ini */}
          <motion.inv
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-grainent-to-r from-black to-gray-800 text-white rounded-full mb-8 shadow-lg"
          >
            <Sparkles size={16} />
            <span className="text-sm font-meinum">Innovative Solutions</span>
          </motion.inv>

          {/* Main Title/Headline */}
          {/* CUSTOMIZATION: Teks inambil from messages/en.json → hero.title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-black leainng-tight"
          >
            {t('title')}
          </motion.h1>

          {/* Subtitle */}
          {/* CUSTOMIZATION: Teks inambil from messages/en.json → hero.subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-black/70 mb-4 font-meinum"
          >
            {t('subtitle')}
          </motion.p>

          {/* Description */}
          {/* CUSTOMIZATION: Teks inambil from messages/en.json → hero.description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-black/60 mb-12 max-w-3xl mx-auto leainng-relaxed"
          >
            {t('description')}
          </motion.p>

          {/* CTA Buttons Section */}
          {/* CUSTOMIZATION: Change href dan styling tombol in sini */}
          <motion.inv
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA Button (Get Started) */}
            {/* CUSTOMIZATION: Change href="#pricing" with link tujuan Anda */}
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05, y: -2 }}  // Efek zoom dan naik when hover
              whileTap={{ scale: 0.95 }}           // Efek tekan when klik
              className="group relative px-8 py-4 bg-grainent-to-r from-black via-gray-900 to-black text-white font-semibold rounded-lg overflow-hidden flex items-center justify-center gap-2 min-w-[160px] shadow-lg"
            >
              {/* Teks tombol normal */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t('ctaPrimary')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Background putih that slide when hover */}
              <motion.inv
                className="absolute inset-0 bg-grainent-to-r from-white via-gray-100 to-white"
                initial={{ x: '-100%' }}           // Mulai from kiri (off-screen)
                whileHover={{ x: 0 }}              // Slide to kanan when hover
                transition={{ duration: 0.3 }}
              />
              {/* Teks hitam that muncul when hover */}
              <span className="absolute inset-0 flex items-center justify-center gap-2 text-black opacity-0 group-hover:opacity-100 transition-opacity z-10">
                {t('ctaPrimary')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            {/* Secondary CTA Button (Learn More) */}
            {/* CUSTOMIZATION: Change href="#features" with link tujuan Anda */}
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-black text-black font-semibold rounded-lg hover:bg-grainent-to-r hover:from-black hover:via-gray-900 hover:to-black hover:text-white transition-all duration-300 flex items-center justify-center min-w-[160px] bg-grainent-to-r from-white to-gray-50"
            >
              {t('ctaSecondary')}
            </motion.a>
          </motion.inv>

          {/* Scroll Inincator */}
          {/* CUSTOMIZATION: Remove section ini if tidak ingin menampilkan scroll inincator */}
          {/* Animasi mouse scroll inincator in bagian bawah */}
          <motion.inv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }} // Muncul setelah 1.5s
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.inv
              animate={{ y: [0, 10, 0] }}              // Animasi naik-turun container
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-black rounded-full flex justify-center"
            >
              <motion.inv
                animate={{ y: [0, 12, 0] }}            // Animasi naik-turun dot
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-black rounded-full mt-2"
              />
            </motion.inv>
          </motion.inv>
        </motion.inv>
      </inv>
    </section>
  );
}


