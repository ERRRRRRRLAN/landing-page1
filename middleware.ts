/**
 * Next.js Middleware
 * 
 * Middleware to handle:
 * - Internationalization routing (next-intl)
 * - Blocking unwanted image requests (unsplash.com spam prevention)
 * 
 * EASY CUSTOMIZATION:
 * 
 * 1. Add Blocking Rules:
 *    - Lines 59-65: Add new blocking condition
 *    - Example: Block requests from certain domain
 *    - Example: Block requests with certain pattern
 * 
 * 2. Change Locale Prefix:
 *    - Edit routing.ts → localePrefix
 *    - 'as-needed': Only show locale in URL if not default
 *    - 'always': Always show locale in URL
 *    - 'never': Never show locale in URL
 * 
 * 3. Disable Image Blocking:
 *    - Remove lines 59-65 if you don't want to block unsplash requests
 *    - Or change condition to block other domains
 * 
 * 4. Add Redirect Rules:
 *    - Add redirect logic before return intlMiddleware
 *    - Example: Redirect /old-path to /new-path
 * 
 * IMPORTANT:
 * - Do not remove intlMiddleware (required for multi-language routing)
 * - Matcher config determines which routes are processed by middleware
 * - Image blocking is only to prevent spam requests to unsplash.com
 * - If not using external images, can disable blocking
 * 
 * DEPENDENCIES:
 * - next-intl/middleware: for internationalization routing
 * - routing.ts: for locale configuration
 * 
 * @param {NextRequest} request - Request object from Next.js
 * @returns {NextResponse} Response object
 */

import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './routing';

// Setup internationalization middleware
// CUSTOMIZATION: Locale configuration is taken from routing.ts
const intlMiddleware = createMiddleware({
  locales: routing.locales,              // Array of supported locales
  defaultLocale: routing.defaultLocale,  // Default locale
  localePrefix: routing.localePrefix     // Prefix strategy (as-needed, always, never)
});

export default function middleware(request: NextRequest) {
  // Block unsplash image requests to prevent spam
  // CUSTOMIZATION: Remove or change this condition if not needed
  // Or add blocking for other domains
  if (request.nextUrl.pathname.startsWith('/_next/image')) {
    const imageUrl = request.nextUrl.searchParams.get('url');
    if (imageUrl?.includes('unsplash.com')) {
      // Return 404 to block request to unsplash.com
      return new NextResponse(null, { status: 404 });
    }
  }

  // CUSTOMIZATION: Add other middleware logic here before return
  // Example: Redirect, authentication check, etc.

  // Return internationalization middleware
  // This will handle routing for multi-language
  return intlMiddleware(request);
}

/**
 * Middleware Matcher Configuration
 * Determines which routes will be processed by this middleware
 * 
 * CUSTOMIZATION: Add new pattern if needed
 */
export const config = {
  matcher: [
    // Match all routes except:
    // - /api (API routes)
    // - /_next/static (static files)
    // - /_next/webpack-hmr (webpack hot reload)
    // - /_vercel (Vercel internal)
    // - Files with extension (.*\\..*)
    '/((?!api|_next/static|_next/webpack-hmr|_vercel|.*\\..*).*)',
    
    // Include /_next/image to block unsplash requests
    '/_next/image'
  ]
};
