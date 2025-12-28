/**
 * Next.js Middleware
 * 
 * Middleware untuk menangani:
 * - Internationalization routing (next-intl)
 * - Blocking unwanted image requests (unsplash.com spam prevention)
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Tambah Blocking Rules:
 *    - Baris 13-18: Tambah kondisi blocking baru
 *    - Contoh: Block request dari domain tertentu
 *    - Contoh: Block request dengan pattern tertentu
 * 
 * 2. Ubah Locale Prefix:
 *    - Edit routing.ts → localePrefix
 *    - 'as-needed': Hanya tampilkan locale di URL jika bukan default
 *    - 'always': Selalu tampilkan locale di URL
 *    - 'never': Tidak pernah tampilkan locale di URL
 * 
 * 3. Nonaktifkan Image Blocking:
 *    - Hapus baris 13-18 jika tidak ingin block unsplash requests
 *    - Atau ubah kondisi untuk block domain lain
 * 
 * 4. Tambah Redirect Rules:
 *    - Tambah logic redirect sebelum return intlMiddleware
 *    - Contoh: Redirect /old-path ke /new-path
 * 
 * PENTING:
 * - Jangan hapus intlMiddleware (diperlukan untuk routing multi-language)
 * - Matcher config menentukan route mana yang diproses middleware
 * - Image blocking hanya untuk mencegah spam request ke unsplash.com
 * - Jika tidak menggunakan external images, bisa nonaktifkan blocking
 * 
 * DEPENDENCIES:
 * - next-intl/middleware: untuk internationalization routing
 * - routing.ts: untuk konfigurasi locale
 * 
 * @param {NextRequest} request - Request object dari Next.js
 * @returns {NextResponse} Response object
 */

import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './routing';

// Setup internationalization middleware
// KUSTOMISASI: Konfigurasi locale diambil dari routing.ts
const intlMiddleware = createMiddleware({
  locales: routing.locales,              // Array locale yang didukung
  defaultLocale: routing.defaultLocale,  // Locale default
  localePrefix: routing.localePrefix     // Prefix strategy (as-needed, always, never)
});

export default function middleware(request: NextRequest) {
  // Block unsplash image requests to prevent spam
  // KUSTOMISASI: Hapus atau ubah kondisi ini jika tidak diperlukan
  // Atau tambah blocking untuk domain lain
  if (request.nextUrl.pathname.startsWith('/_next/image')) {
    const imageUrl = request.nextUrl.searchParams.get('url');
    if (imageUrl?.includes('unsplash.com')) {
      // Return 404 untuk block request ke unsplash.com
      return new NextResponse(null, { status: 404 });
    }
  }

  // KUSTOMISASI: Tambah logic middleware lain di sini sebelum return
  // Contoh: Redirect, authentication check, dll

  // Return internationalization middleware
  // Ini akan menangani routing untuk multi-language
  return intlMiddleware(request);
}

/**
 * Middleware Matcher Configuration
 * Menentukan route mana yang akan diproses oleh middleware ini
 * 
 * KUSTOMISASI: Tambah pattern baru jika diperlukan
 */
export const config = {
  matcher: [
    // Match semua route kecuali:
    // - /api (API routes)
    // - /_next/static (static files)
    // - /_next/webpack-hmr (webpack hot reload)
    // - /_vercel (Vercel internal)
    // - Files dengan extension (.*\\..*)
    '/((?!api|_next/static|_next/webpack-hmr|_vercel|.*\\..*).*)',
    
    // Include /_next/image untuk block unsplash requests
    '/_next/image'
  ]
};

