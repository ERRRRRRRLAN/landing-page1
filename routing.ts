/**
 * Routing Configuration
 * 
 * Konfigurasi untuk routing dan internationalization.
 * Digunakan oleh:
 * - next-intl untuk multi-language routing
 * - Middleware untuk locale detection
 * - Layout untuk generate static params
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Tambah Locale Baru:
 *    - Baris 11: Tambah locale baru ke array locales
 *    - Contoh: locales: ['en', 'id', 'es'] untuk menambah Spanish
 *    - Pastikan file messages/{locale}.json ada (contoh: messages/es.json)
 *    - Copy struktur dari messages/en.json dan translate
 * 
 * 2. Ubah Default Locale:
 *    - Baris 12: defaultLocale: 'en'
 *    - Ubah 'en' dengan locale yang ingin menjadi default
 *    - Pastikan locale ada di array locales
 * 
 * 3. Ubah Locale Prefix Strategy:
 *    - Baris 13: localePrefix: 'as-needed'
 *    - 'as-needed': Hanya tampilkan locale di URL jika bukan default (contoh: /id/... tapi / untuk en)
 *    - 'always': Selalu tampilkan locale di URL (contoh: /en/..., /id/...)
 *    - 'never': Tidak pernah tampilkan locale di URL (tidak direkomendasikan untuk multi-language)
 * 
 * PENTING:
 * - Locale code harus lowercase dan mengikuti format ISO 639-1 (2 huruf)
 * - Pastikan setiap locale memiliki file messages/{locale}.json
 * - Default locale harus ada di array locales
 * - Jangan ubah 'as const' (diperlukan untuk TypeScript type safety)
 * 
 * CONTOH PENGGUNAAN:
 * - locales: ['en', 'id'] → English dan Indonesian
 * - locales: ['en', 'id', 'es', 'fr'] → English, Indonesian, Spanish, French
 * 
 * DEPENDENCIES:
 * - next-intl: menggunakan konfigurasi ini untuk routing
 * - messages/{locale}.json: file translation untuk setiap locale
 * 
 * @type {Object}
 * @property {readonly string[]} locales - Array locale yang didukung
 * @property {readonly string} defaultLocale - Locale default
 * @property {readonly 'as-needed' | 'always' | 'never'} localePrefix - Strategy untuk locale prefix di URL
 */

export const routing = {
  // Array locale yang didukung
  // KUSTOMISASI: Tambah locale baru di sini (contoh: 'es' untuk Spanish)
  locales: ['en', 'id'] as const,
  
  // Locale default (akan digunakan jika locale tidak valid atau tidak ditentukan)
  // KUSTOMISASI: Ubah dengan locale yang ingin menjadi default
  defaultLocale: 'en' as const,
  
  // Locale prefix strategy
  // 'as-needed': Hanya tampilkan locale jika bukan default (contoh: /id/... tapi / untuk en)
  // 'always': Selalu tampilkan locale di URL (contoh: /en/..., /id/...)
  // 'never': Tidak pernah tampilkan locale di URL (tidak direkomendasikan)
  // KUSTOMISASI: Ubah strategy sesuai kebutuhan
  localePrefix: 'as-needed' as const
};

