/**
 * Home Page Component
 * 
 * Halaman utama yang menggabungkan semua section.
 * Urutan section:
 * 1. Hero - Section utama di bagian atas
 * 2. Features - Grid fitur produk/layanan
 * 3. Testimonials - Testimoni pelanggan
 * 4. Pricing - Paket harga
 * 5. Contact - Form kontak
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Tambah Section Baru:
 *    - Import component section baru (contoh: import About from '@/components/sections/About')
 *    - Tambah <About /> di dalam return
 *    - Pastikan component ada di folder components/sections/
 * 
 * 2. Hapus Section:
 *    - Hapus import component yang tidak diinginkan
 *    - Hapus <ComponentName /> dari return
 * 
 * 3. Ubah Urutan Section:
 *    - Pindahkan <ComponentName /> ke posisi yang diinginkan
 *    - Urutan saat ini: Hero → Features → Testimonials → Pricing → Contact
 * 
 * 4. Tambah Wrapper/Section Kustom:
 *    - Tambah div atau section wrapper jika diperlukan
 *    - Contoh: <div className="custom-wrapper"><Hero /></div>
 * 
 * PENTING:
 * - Semua section harus memiliki id yang sesuai dengan href di Navigation
 * - Pastikan Hero section memiliki id="hero"
 * - Pastikan Features section memiliki id="features"
 * - Pastikan Testimonials section memiliki id="testimonials"
 * - Pastikan Pricing section memiliki id="pricing"
 * - Pastikan Contact section memiliki id="contact"
 * - Jika menambah section baru, pastikan ada di Navigation.tsx juga
 * 
 * DEPENDENCIES:
 * - Semua component section dari @/components/sections/
 * 
 * @returns {JSX.Element} Home page dengan semua section
 */

import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Section utama di bagian atas */}
      <Hero />
      
      {/* Features Section - Grid fitur produk/layanan */}
      <Features />
      
      {/* Testimonials Section - Testimoni pelanggan */}
      <Testimonials />
      
      {/* Pricing Section - Paket harga */}
      <Pricing />
      
      {/* Contact Section - Form kontak */}
      <Contact />
    </>
  );
}

