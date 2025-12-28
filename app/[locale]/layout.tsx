/**
 * Locale Layout Component
 * 
 * Layout wrapper untuk setiap locale (bahasa).
 * Fitur:
 * - Membungkus semua halaman dengan Navigation dan Footer
 * - Menyediakan translation context untuk semua component
 * - Generate static params untuk semua locale
 * - Validasi locale yang valid
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Tambah Component Global:
 *    - Import component baru (contoh: import CookieBanner from '@/components/CookieBanner')
 *    - Tambah <CookieBanner /> di dalam return
 *    - Component akan muncul di semua halaman dengan locale ini
 * 
 * 2. Ubah Wrapper Main:
 *    - Baris 29: <main className="min-h-screen">
 *    - Tambah class atau wrapper tambahan jika diperlukan
 *    - Contoh: <main className="min-h-screen custom-class">
 * 
 * 3. Ubah Urutan Component:
 *    - Pindahkan Navigation, main, atau Footer ke posisi berbeda jika diperlukan
 *    - Urutan default: Navigation → Main Content → Footer
 * 
 * 4. Tambah Metadata per Locale:
 *    - Export metadata function jika ingin metadata berbeda per locale
 *    - Contoh: export async function generateMetadata({ params: { locale } }) { ... }
 * 
 * PENTING:
 * - Jangan hapus NextIntlClientProvider (diperlukan untuk translation)
 * - Jangan hapus Navigation dan Footer (akan menghilangkan navigasi)
 * - Locale harus valid (ada di routing.ts)
 * - Messages akan di-load otomatis dari messages/{locale}.json
 * - generateStaticParams diperlukan untuk static generation
 * 
 * DEPENDENCIES:
 * - next-intl: untuk internationalization
 * - routing.ts: untuk konfigurasi locale
 * - Navigation dan Footer components
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components (page content)
 * @param {Object} props.params - Route parameters
 * @param {string} props.params.locale - Locale code (en, id, dll)
 * @returns {JSX.Element} Layout dengan Navigation, Main Content, dan Footer
 */

import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/routing';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Generate static params untuk semua locale
 * Digunakan untuk static generation di build time
 * KUSTOMISASI: Locale diambil dari routing.ts, tidak perlu diubah di sini
 */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // Validasi locale: jika tidak valid, tampilkan 404
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  // Load messages untuk locale ini
  // Messages diambil dari messages/{locale}.json
  const messages = await getMessages({ locale });

  return (
    // Provider untuk translation context
    // Semua component di dalam ini bisa menggunakan useTranslations()
    <NextIntlClientProvider messages={messages}>
      {/* Navigation Bar - Muncul di semua halaman */}
      <Navigation />
      
      {/* Main Content - Halaman yang sedang dibuka */}
      <main className="min-h-screen">
        {children}
      </main>
      
      {/* Footer - Muncul di semua halaman */}
      <Footer />
    </NextIntlClientProvider>
  );
}

