import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './routing';

const intlMiddleware = createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: routing.localePrefix
});

export default function middleware(request: NextRequest) {
  // Block unsplash image requests to prevent spam
  if (request.nextUrl.pathname.startsWith('/_next/image')) {
    const imageUrl = request.nextUrl.searchParams.get('url');
    if (imageUrl?.includes('unsplash.com')) {
      return new NextResponse(null, { status: 404 });
    }
  }

  return intlMiddleware(request);
}

export const config = {
  // Include /_next/image to block unsplash requests, but exclude other _next routes
  matcher: [
    '/((?!api|_next/static|_next/webpack-hmr|_vercel|.*\\..*).*)',
    '/_next/image'
  ]
};

