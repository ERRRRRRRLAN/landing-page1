/**
 * Pricing Section Component
 * 
 * Section yang menampilkan paket harga/pricing plans.
 * Fitur:
 * - Toggle bulanan/tahunan (monthly/yearly)
 * - 3 pricing cards (Starter, Professional, Enterprise)
 * - Card tengah (Professional) ditandai sebagai "Most Popular"
 * - Animasi fade-in saat scroll ke section
 * - Hover effect dengan scale dan shadow
 * - Background gradient terang dengan pattern
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Ubah Jumlah Plan:
 *    - Baris 16: Edit array plans (contoh: ['basic', 'pro', 'enterprise'])
 *    - Pastikan setiap plan ada di messages/en.json dan messages/id.json → pricing.plans.{planKey}
 * 
 * 2. Ubah Teks Plan:
 *    - Edit messages/en.json dan messages/id.json → section "pricing"
 *    - title: Judul section (contoh: "Choose Your Plan")
 *    - subtitle: Subjudul section
 *    - monthly: Teks untuk "Monthly"
 *    - yearly: Teks untuk "Yearly"
 *    - plans.starter.name: Nama plan Starter
 *    - plans.starter.price: Harga (contoh: "$9", "Free", "Custom")
 *    - plans.starter.description: Deskripsi plan
 *    - plans.starter.features: Array fitur (contoh: ["Feature 1", "Feature 2"])
 *    - plans.starter.cta: Teks tombol (contoh: "Get Started")
 *    - plans.professional.popular: Teks badge "Most Popular" (hanya untuk plan tengah)
 * 
 * 3. Ubah Plan yang "Popular":
 *    - Baris 99: isPopular = planKey === 'professional'
 *    - Ubah 'professional' dengan key plan yang ingin ditandai sebagai popular
 * 
 * 4. Ubah Warna Background:
 *    - Baris 41: bg-gradient-to-b from-white via-gray-50 to-white
 *    - Baris 109: bg-gradient-to-br from-black via-gray-900 to-black (card popular)
 *    - Baris 110: bg-gradient-to-br from-white to-gray-50 (card normal)
 * 
 * 5. Ubah Layout Grid:
 *    - Baris 95: grid-cols-1 md:grid-cols-3
 *    - Ubah angka untuk jumlah kolom berbeda
 * 
 * 6. Ubah Toggle Billing:
 *    - Baris 12: const [isYearly, setIsYearly] = useState(false);
 *    - Ubah false menjadi true jika ingin default tahunan
 *    - Atau nonaktifkan toggle dengan menghapus baris 68-87
 * 
 * 7. Ubah Link Tombol CTA:
 *    - Baris 156: href={planKey === 'enterprise' ? '#contact' : '#contact'}
 *    - Ubah dengan link tujuan yang sesuai
 * 
 * 8. Ubah Harga Berdasarkan Toggle:
 *    - Saat ini hanya menampilkan "/month" atau "/year" di belakang harga
 *    - Untuk mengubah harga berdasarkan toggle, edit logic di baris 135-139
 * 
 * PENTING:
 * - Plan tengah (index 1) otomatis menjadi "Most Popular" jika isPopular = true
 * - Pastikan semua plan key ada di messages/en.json dan messages/id.json
 * - Harga bisa berupa: "$X", "Free", "Custom", atau format lain
 * - Features harus array of strings
 * - Popular badge hanya untuk plan tengah
 * 
 * DEPENDENCIES:
 * - next-intl: untuk multi-language support
 * - framer-motion: untuk animasi dan scroll detection
 * - lucide-react: untuk icons (Check, Sparkles)
 * 
 * @returns {JSX.Element} Pricing section component
 */

'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  // Hook untuk mengambil terjemahan dari file messages → section "pricing"
  const t = useTranslations('pricing');
  
  // State untuk toggle billing period (monthly/yearly)
  // KUSTOMISASI: Ubah false menjadi true jika ingin default tahunan
  const [isYearly, setIsYearly] = useState(false);
  
  // Ref untuk mendeteksi apakah section sudah masuk viewport
  const ref = useRef(null);
  
  // Hook untuk check apakah element sudah dalam viewport
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Array plan keys yang akan ditampilkan
  // KUSTOMISASI: Tambah/kurangi plan di sini
  // Pastikan setiap key ada di messages/en.json dan messages/id.json → pricing.plans.{key}
  const plans = ['starter', 'professional', 'enterprise'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
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
          <p className="text-xl text-black/60 max-w-2xl mx-auto mb-8">
            {t('subtitle')}
          </p>

          {/* Billing Toggle (Monthly/Yearly) */}
          {/* KUSTOMISASI: Hapus section ini jika tidak ingin toggle billing */}
          <div className="flex items-center justify-center gap-4">
            {/* Label Monthly */}
            <span className={`text-sm font-medium ${!isYearly ? 'text-black' : 'text-black/40'}`}>
              {t('monthly')}
            </span>
            {/* Toggle Switch Button */}
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 bg-black rounded-full p-1 transition-colors"
              aria-label="Toggle billing period"
            >
              {/* Toggle Circle (animasi slide) */}
              <motion.div
                animate={{ x: isYearly ? 24 : 0 }}  // Slide ke kanan jika yearly, ke kiri jika monthly
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="w-6 h-6 bg-white rounded-full"
              />
            </button>
            {/* Label Yearly */}
            <span className={`text-sm font-medium ${isYearly ? 'text-black' : 'text-black/40'}`}>
              {t('yearly')}
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        {/* KUSTOMISASI: Ubah grid-cols-3 menjadi grid-cols-4 untuk 4 kolom */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Render setiap plan sebagai card */}
          {plans.map((planKey, index) => {
            // Ambil data plan dari translation file
            const plan = t.raw(`plans.${planKey}`);
            
            // KUSTOMISASI: Tentukan plan mana yang ditandai sebagai "Popular"
            // Plan tengah (professional) otomatis menjadi popular
            const isPopular = planKey === 'professional';

            return (
              <motion.div
                key={planKey}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`
                  relative p-8 rounded-2xl border-2 transition-all duration-300 shadow-lg
                  ${isPopular 
                    ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white border-black scale-105 md:scale-110' 
                    : 'bg-gradient-to-br from-white to-gray-50 text-black border-black hover:bg-gradient-to-br hover:from-black hover:via-gray-900 hover:to-black hover:text-white'
                  }
                `}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  >
                    <div className="flex items-center gap-2 px-4 py-1 bg-white text-black rounded-full text-sm font-semibold">
                      <Sparkles size={14} />
                      {plan.popular}
                    </div>
                  </motion.div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm opacity-70 mb-6">{plan.description}</p>

                {/* Price Display */}
                {/* KUSTOMISASI: Untuk mengubah harga berdasarkan toggle, edit logic di sini */}
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {/* Tampilkan "/month" atau "/year" jika harga bukan Free/Custom */}
                  {plan.price !== 'Free' && plan.price !== 'Custom' && plan.price !== 'Gratis' && plan.price !== 'Kustom' && (
                    <span className="text-lg opacity-70">/{isYearly ? 'year' : 'month'}</span>
                  )}
                </div>

                {/* Features List */}
                {/* Menampilkan daftar fitur dengan icon checkmark */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check 
                        size={20} 
                        className={`flex-shrink-0 mt-0.5 ${isPopular ? 'text-white' : 'text-black'}`}
                      />
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {/* KUSTOMISASI: Ubah href dengan link tujuan yang sesuai */}
                <motion.a
                  href={planKey === 'enterprise' ? '#contact' : '#contact'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    block w-full text-center py-4 font-semibold rounded-lg transition-all duration-300
                    ${isPopular
                      ? 'bg-white text-black hover:bg-white/90'  // Tombol putih untuk popular plan
                      : 'bg-black text-white hover:bg-black/90 border-2 border-black'  // Tombol hitam untuk plan lain
                    }
                  `}
                >
                  {plan.cta}
                </motion.a>

                {/* Corner Accent */}
                <div className={`
                  absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 rounded-tr-2xl
                  ${isPopular ? 'border-white' : 'border-black'}
                `} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

