/**
 * Internationalization (i18n) Configuration
 * 
 * File konfigurasi untuk next-intl (multi-language support).
 * Fungsi:
 * - Load messages berdasarkan locale
 * - Validasi locale yang valid
 * - Fallback ke default locale jika locale tidak valid
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Tambah Locale Baru:
 *    - Edit routing.ts untuk menambah locale baru
 *    - Buat file messages/{locale}.json (contoh: messages/es.json untuk Spanish)
 *    - Copy struktur dari messages/en.json dan translate
 *    - File ini akan otomatis load locale baru
 * 
 * 2. Ubah Default Locale:
 *    - Edit routing.ts → defaultLocale
 *    - File ini akan otomatis menggunakan defaultLocale dari routing.ts
 * 
 * 3. Ubah Path Messages:
 *    - Baris 15: `./messages/${locale}.json`
 *    - Ubah path jika file messages berada di lokasi berbeda
 * 
 * PENTING:
 * - Jangan ubah struktur fungsi ini (diperlukan oleh next-intl)
 * - Pastikan routing.ts sudah dikonfigurasi dengan benar
 * - Pastikan file messages/{locale}.json ada untuk setiap locale
 * - Locale yang tidak valid akan fallback ke defaultLocale
 * 
 * DEPENDENCIES:
 * - next-intl/server: untuk getRequestConfig
 * - routing.ts: untuk konfigurasi locale
 * - messages/{locale}.json: file translation untuk setiap locale
 * 
 * @param {Object} config - Configuration object dari next-intl
 * @param {Promise<string>} config.requestLocale - Locale dari request
 * @returns {Promise<Object>} Configuration object dengan locale dan messages
 */

import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Ambil locale dari request
  // Locale biasanya dari segment [locale] di URL
  let locale = await requestLocale;

  // Validasi locale: jika tidak valid atau tidak ada, gunakan default locale
  // KUSTOMISASI: Locale valid diambil dari routing.ts
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Return configuration dengan locale dan messages
  // Messages di-load dari file messages/{locale}.json
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
    // KUSTOMISASI: Ubah path jika file messages berada di lokasi berbeda
    // Contoh: `./locales/${locale}/messages.json`
  };
});

