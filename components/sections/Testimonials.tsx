/**
 * Testimonials Section Component
 * 
 * Section yang menampilkan testimoni/testimonial dari pelanggan.
 * Fitur:
 * - Grid layout 2 kolom (1 kolom di mobile)
 * - Rating bintang untuk setiap testimoni
 * - Avatar dengan inisial nama
 * - Animasi fade-in saat scroll ke section
 * - Hover effect dengan scale dan shadow
 * - Background gradient gelap dengan efek blur
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Tambah/Kurangi Testimoni:
 *    - Baris 9-38: Edit array testimonials
 *    - Format setiap testimoni:
 *      {
 *        name: 'Nama Lengkap',           // Nama pelanggan
 *        role: 'Jabatan, Nama Perusahaan', // Jabatan dan perusahaan
 *        content: 'Teks testimoni...',   // Isi testimoni (dalam quotes)
 *        rating: 5,                      // Rating 1-5 (jumlah bintang)
 *        avatar: 'NK',                   // Inisial untuk avatar (2 huruf)
 *      }
 * 
 * 2. Ubah Teks Section:
 *    - Edit messages/en.json dan messages/id.json → section "testimonials"
 *    - title: Judul section (contoh: "What Our Customers Say")
 *    - subtitle: Subjudul section
 * 
 * 3. Ubah Layout Grid:
 *    - Baris 73: grid-cols-1 md:grid-cols-2
 *    - Ubah md:grid-cols-2 menjadi md:grid-cols-3 untuk 3 kolom di desktop
 * 
 * 4. Ubah Warna Background:
 *    - Baris 46: bg-gradient-to-br from-black via-gray-900 to-black
 *    - Contoh: from-blue-900 via-blue-800 to-blue-900 untuk biru gelap
 * 
 * 5. Ubah Warna Card:
 *    - Baris 81: bg-gradient-to-br from-white/5 via-white/3 to-white/5
 *    - Ubah opacity (angka setelah /) untuk mengubah transparansi
 * 
 * 6. Ubah Rating:
 *    - Baris 14, 21, 28, 35: rating: 5
 *    - Ubah angka 1-5 untuk jumlah bintang
 * 
 * 7. Ubah Avatar:
 *    - Baris 15, 22, 29, 36: avatar: 'SJ'
 *    - Gunakan 2 huruf inisial nama pelanggan
 * 
 * 8. Nonaktifkan Quote Icon:
 *    - Hapus baris 83-86 jika tidak ingin menampilkan icon quote
 * 
 * PENTING:
 * - Pastikan content testimoni dalam quotes ('' atau "")
 * - Rating harus angka 1-5
 * - Avatar harus 2 karakter (inisial)
 * - Nama dan role harus jelas dan profesional
 * - Teks title dan subtitle harus ada di messages/en.json dan messages/id.json
 * 
 * DEPENDENCIES:
 * - next-intl: untuk multi-language support
 * - framer-motion: untuk animasi dan scroll detection
 * - lucide-react: untuk icons (Quote, Star)
 * 
 * @returns {JSX.Element} Testimonials section component
 */

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

// Array testimoni pelanggan
// KUSTOMISASI: Tambah/kurangi/edit testimoni di sini
// Format: { name, role, content, rating (1-5), avatar (2 huruf inisial) }
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'This platform has completely transformed how we operate. The innovative solutions and community support are unmatched.',
    rating: 5,        // Rating 1-5 bintang
    avatar: 'SJ',     // Inisial untuk avatar (2 huruf)
  },
  {
    name: 'Michael Chen',
    role: 'Founder, InnovateLab',
    content: 'The best investment we\'ve made. Easy to use, powerful features, and exceptional support. Highly recommended!',
    rating: 5,
    avatar: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director, GrowthCo',
    content: 'Outstanding platform that scales with our business. The team behind this truly understands what businesses need.',
    rating: 5,
    avatar: 'ER',
  },
  {
    name: 'David Kim',
    role: 'CTO, ScaleUp Solutions',
    content: 'Reliable, secure, and innovative. This has become an essential part of our daily operations.',
    rating: 5,
    avatar: 'DK',
  },
];

export default function Testimonials() {
  // Hook untuk mengambil terjemahan dari file messages → section "testimonials"
  const t = useTranslations('testimonials');
  
  // Ref untuk mendeteksi apakah section sudah masuk viewport
  const ref = useRef(null);
  
  // Hook untuk check apakah element sudah dalam viewport
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-gray-300 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-white to-gray-300 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        {/* KUSTOMISASI: Ubah grid-cols-2 menjadi grid-cols-3 untuk 3 kolom di desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Render setiap testimoni sebagai card */}
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}                    // Mulai dari bawah dan invisible
              animate={isInView ? { opacity: 1, y: 0 } : {}}    // Animasi ke visible saat masuk viewport
              transition={{ duration: 0.6, delay: index * 0.1 }} // Delay berdasarkan index untuk efek stagger
              whileHover={{ y: -8, scale: 1.02 }}              // Efek naik dan zoom saat hover
              className="relative p-8 bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl hover:border-white/30 hover:bg-gradient-to-br hover:from-white/10 hover:via-white/5 hover:to-white/10 transition-all duration-300 shadow-lg"
            >
              {/* Quote Icon (dekorasi) */}
              {/* KUSTOMISASI: Hapus section ini jika tidak ingin menampilkan icon quote */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote size={48} />
              </div>

              {/* Rating Stars */}
              {/* Menampilkan bintang sesuai rating (1-5) */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-white text-white" />
                ))}
              </div>

              {/* Testimonial Content */}
              {/* KUSTOMISASI: Teks testimoni diambil dari array testimonials */}
              <p className="text-white/90 mb-6 text-lg leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              {/* Menampilkan avatar (inisial) dan informasi pelanggan */}
              <div className="flex items-center gap-4">
                {/* Avatar Circle dengan Inisial */}
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg">
                  {testimonial.avatar}
                </div>
                {/* Nama dan Jabatan */}
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              </div>

              {/* Corner Accent (dekorasi sudut kiri bawah) */}
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/20 rounded-bl-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

