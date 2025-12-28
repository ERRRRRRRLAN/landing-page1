/**
 * Features Section Component
 * 
 * Section yang menampilkan fitur-fitur produk/layanan dalam bentuk Bento Box grid.
 * Fitur:
 * - Grid layout responsif (1 kolom mobile, 2 kolom tablet, 3 kolom desktop)
 * - Animasi fade-in saat scroll ke section
 * - Hover effect yang mengubah warna card dari putih ke hitam
 * - Icon untuk setiap fitur
 * - Background pattern dengan gradient overlay
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Ubah Jumlah Fitur:
 *    - Baris 38-45: Tambah/kurangi item di array features
 *    - Format: { key: 'featureX', icon: IconComponent }
 *    - Pastikan 'featureX' ada di messages/en.json dan messages/id.json → features.items.featureX
 * 
 * 2. Ubah Icon Fitur:
 *    - Baris 7: Import icon baru dari lucide-react (contoh: Rocket, Lock, Globe)
 *    - Baris 9: Tambah icon ke array icons sesuai urutan
 *    - Baris 38-45: Assign icon ke feature (contoh: { key: 'feature1', icon: Rocket })
 *    - Lihat semua icon di: https://lucide.dev/icons/
 * 
 * 3. Ubah Teks Fitur:
 *    - Edit messages/en.json dan messages/id.json → section "features"
 *    - title: Judul section (contoh: "Why Choose Us")
 *    - subtitle: Subjudul section
 *    - items.feature1.title: Judul fitur 1
 *    - items.feature1.description: Deskripsi fitur 1
 *    - Ulangi untuk feature2, feature3, dll
 * 
 * 4. Ubah Layout Grid:
 *    - Baris 81: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
 *    - Ubah angka untuk jumlah kolom berbeda
 *    - Contoh: lg:grid-cols-4 untuk 4 kolom di desktop
 * 
 * 5. Ubah Warna Background:
 *    - Baris 48: bg-gradient-to-b from-white via-gray-50 to-white
 *    - Baris 93: bg-gradient-to-br from-white to-gray-50 (card normal)
 *    - Baris 94: hover:from-black hover:via-gray-900 hover:to-black (card hover)
 * 
 * 6. Ubah Warna Icon Container:
 *    - Baris 114: bg-gradient-to-br from-black to-gray-800 (normal)
 *    - Baris 114: group-hover:from-white group-hover:to-gray-100 (hover)
 * 
 * 7. Ubah Animasi:
 *    - Baris 16-36: Edit containerVariants dan itemVariants
 *    - Baris 110: Edit whileHover untuk efek hover icon
 * 
 * 8. Ubah Card yang Lebih Besar:
 *    - Baris 85: isLarge = index === 0 || index === 2
 *    - Ubah index untuk menentukan card mana yang lebih besar
 *    - Atau hapus logika ini untuk ukuran seragam
 * 
 * PENTING:
 * - Jumlah fitur maksimal 6 (feature1-feature6) sesuai struktur default
 * - Jika menambah fitur lebih dari 6, pastikan ada di messages/en.json dan messages/id.json
 * - Pastikan jumlah icon di array icons sama dengan jumlah fitur
 * - Key di features array harus match dengan key di messages JSON
 * 
 * DEPENDENCIES:
 * - next-intl: untuk multi-language support
 * - framer-motion: untuk animasi dan scroll detection
 * - lucide-react: untuk icons
 * 
 * @returns {JSX.Element} Features section component
 */

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Users, MousePointerClick, Headphones, TrendingUp, Shield } from 'lucide-react';

// Array icon yang akan digunakan untuk fitur
// KUSTOMISASI: Import icon baru dari lucide-react dan tambah ke array ini
// Lihat semua icon di: https://lucide.dev/icons/
const icons = [Zap, Users, MousePointerClick, Headphones, TrendingUp, Shield];

export default function Features() {
  // Hook untuk mengambil terjemahan dari file messages → section "features"
  const t = useTranslations('features');
  
  // Ref untuk mendeteksi apakah section sudah masuk viewport
  const ref = useRef(null);
  
  // Hook untuk check apakah element sudah dalam viewport
  // once: true = animasi hanya sekali
  // margin: '-100px' = trigger animasi 100px sebelum element masuk viewport
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Variants untuk animasi container (mengatur timing animasi card)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,  // Delay 0.1s antar card
      },
    },
  };

  // Variants untuk animasi card individual
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },  // Mulai dari bawah (50px) dan invisible
    visible: {
      opacity: 1,
      y: 0,                          // Akhir: posisi normal
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Array fitur yang akan ditampilkan
  // KUSTOMISASI: Tambah/kurangi fitur di sini
  // Format: { key: 'featureX', icon: IconComponent }
  // Pastikan 'featureX' ada di messages/en.json dan messages/id.json → features.items.featureX
  const features = [
    { key: 'feature1', icon: Zap },
    { key: 'feature2', icon: Users },
    { key: 'feature3', icon: MousePointerClick },
    { key: 'feature4', icon: Headphones },
    { key: 'feature5', icon: TrendingUp },
    { key: 'feature6', icon: Shield },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Features Grid - Bento Box Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Render setiap fitur sebagai card */}
          {features.map((feature, index) => {
            const Icon = feature.icon;  // Ambil icon component
            
            // KUSTOMISASI: Tentukan card mana yang lebih besar
            // Saat ini: card index 0 dan 2 lebih besar di tablet
            const isLarge = index === 0 || index === 2;
            
            return (
              <motion.div
                key={feature.key}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}  // Efek naik dan zoom saat hover
                className={`
                  group relative p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-black rounded-2xl
                  hover:bg-gradient-to-br hover:from-black hover:via-gray-900 hover:to-black hover:text-white transition-all duration-300
                  ${isLarge ? 'md:col-span-2 lg:col-span-1' : ''}  // Span 2 kolom di tablet jika isLarge
                  cursor-pointer shadow-lg
                `}
              >
                {/* Hover Effect Background (gradient hitam yang muncul saat hover) */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl"
                  initial={{ scale: 0, opacity: 0 }}    // Mulai dari scale 0 dan invisible
                  whileHover={{ scale: 1, opacity: 1 }} // Scale ke 1 dan visible saat hover
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  {/* Icon Container */}
                  {/* KUSTOMISASI: Ubah ukuran icon dengan mengubah size={32} */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}  // Animasi shake saat hover
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-100 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md">
                      <Icon size={32} className="text-white group-hover:text-black transition-colors duration-300" />
                    </div>
                  </motion.div>

                  {/* Feature Title */}
                  {/* Teks diambil dari messages/en.json → features.items.{feature.key}.title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                    {t(`items.${feature.key}.title`)}
                  </h3>
                  
                  {/* Feature Description */}
                  {/* Teks diambil dari messages/en.json → features.items.{feature.key}.description */}
                  <p className="text-black/70 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                    {t(`items.${feature.key}.description`)}
                  </p>
                </div>

                {/* Corner Accent (dekorasi sudut kanan atas) */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-black group-hover:border-white rounded-tr-2xl transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

