/**
 * Footer Component
 * 
 * Komponen footer yang ditampilkan di bagian bawah halaman.
 * Fitur:
 * - Brand/Logo section dengan deskripsi
 * - Quick Links (link cepat ke section utama)
 * - Legal Links (Privacy, Terms, About)
 * - Copyright notice dengan tahun otomatis
 * - Animasi fade-in saat scroll ke footer
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Ubah Logo/Brand Name:
 *    - Baris 22: Ganti "LOGO" dengan nama brand Anda
 * 
 * 2. Ubah Deskripsi Brand:
 *    - Baris 23-25: Edit teks deskripsi sesuai brand Anda
 * 
 * 3. Ubah Quick Links:
 *    - Baris 38-52: Tambah/kurangi link sesuai kebutuhan
 *    - Pastikan href mengarah ke section yang ada (#features, #pricing, dll)
 *    - Pastikan teks link ada di messages/en.json dan messages/id.json → section "nav"
 * 
 * 4. Ubah Legal Links:
 *    - Baris 66-80: Tambah/kurangi link legal
 *    - Ganti href="#" dengan URL halaman Privacy Policy, Terms, dll
 *    - Pastikan teks link ada di messages/en.json dan messages/id.json → section "footer.links"
 * 
 * 5. Ubah Nama Perusahaan di Copyright:
 *    - Baris 92: Ganti "Your Company" dengan nama perusahaan Anda
 * 
 * 6. Ubah Warna Background:
 *    - Baris 11: Edit bg-gradient-to-br from-black via-gray-900 to-black
 *    - Contoh: from-blue-900 via-blue-800 to-blue-900 untuk biru
 * 
 * 7. Ubah Layout Grid:
 *    - Baris 13: grid-cols-1 md:grid-cols-4 → ubah angka untuk jumlah kolom
 *    - Baris 20: col-span-1 md:col-span-2 → ubah span untuk brand section
 * 
 * PENTING:
 * - Pastikan semua teks yang menggunakan t() ada di file translation
 * - Link href harus valid (internal dengan # atau external dengan https://)
 * - Tahun copyright otomatis menggunakan new Date().getFullYear()
 * 
 * DEPENDENCIES:
 * - next-intl: untuk multi-language support
 * - framer-motion: untuk animasi fade-in
 * 
 * @returns {JSX.Element} Footer component
 */

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Footer() {
  // Hook untuk mengambil terjemahan dari file messages
  const t = useTranslations('footer');      // Translation untuk footer section
  const tNav = useTranslations('nav');       // Translation untuk navigation (digunakan di Quick Links)

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid Layout: 1 kolom di mobile, 4 kolom di desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          {/* KUSTOMISASI: Ganti "LOGO" dan deskripsi di sini */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}      // Mulai dari bawah dan invisible
            whileInView={{ opacity: 1, y: 0 }}  // Animasi ke visible saat masuk viewport
            viewport={{ once: true }}            // Animasi hanya sekali
            transition={{ duration: 0.5 }}      // Durasi animasi
            className="col-span-1 md:col-span-2" // Span 2 kolom di desktop
          >
            <h3 className="text-2xl font-bold mb-4">LOGO</h3>
            {/* KUSTOMISASI: Edit deskripsi brand di sini */}
            <p className="text-white/70 max-w-md">
              Transforming businesses with innovative solutions. Built for the community, driven by excellence.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          {/* KUSTOMISASI: Tambah/kurangi link di sini */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }} // Delay sedikit untuk efek stagger
            className="space-y-4"
          >
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {/* Link ke Features section */}
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors">
                  {tNav('features')}
                </a>
              </li>
              {/* Link ke Pricing section */}
              <li>
                <a href="#pricing" className="text-white/70 hover:text-white transition-colors">
                  {tNav('pricing')}
                </a>
              </li>
              {/* Link ke Contact section */}
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  {tNav('contact')}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal Links Section */}
          {/* KUSTOMISASI: Tambah/kurangi link legal, ganti href dengan URL yang valid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }} // Delay lebih lama untuk efek stagger
            className="space-y-4"
          >
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2">
              {/* KUSTOMISASI: Ganti href="#" dengan URL halaman Privacy Policy */}
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  {t('links.privacy')}
                </a>
              </li>
              {/* KUSTOMISASI: Ganti href="#" dengan URL halaman Terms of Service */}
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  {t('links.terms')}
                </a>
              </li>
              {/* KUSTOMISASI: Ganti href="#" dengan URL halaman About */}
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  {t('links.about')}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section */}
        {/* KUSTOMISASI: Ganti "Your Company" dengan nama perusahaan Anda */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-white/10 text-center text-white/70"
        >
          {/* Tahun otomatis menggunakan new Date().getFullYear() */}
          <p>&copy; {new Date().getFullYear()} Your Company. {t('rights')}.</p>
        </motion.div>
      </div>
    </footer>
  );
}

