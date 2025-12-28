/**
 * Locale Layout Component
 * 
 * Layout wrapper for each locale (language).
 * Features:
 * - Wraps all pages with Navigation and Footer
 * - Provides translation context for all components
 * - Generates static params for all locales
 * - Validates valid locale
 * 
 * EASY CUSTOMIZATION:
 * 
 * 1. Add Global Component:
 *    - Import new component (example: import CookieBanner from '@/components/CookieBanner')
 *    - Add <CookieBanner /> inside return
 *    - Component will appear on all pages with this locale
 * 
 * 2. Change Main Wrapper:
 *    - Line 91: <main className="min-h-screen">
 *    - Add class or additional wrapper if needed
 *    - Example: <main className="min-h-screen custom-class">
 * 
 * 3. Change Component Order:
 *    - Move Navigation, main, or Footer to different position if needed
 *    - Default order: Navigation → Main Content → Footer
 * 
 * 4. Add Metadata per Locale:
 *    - Export metadata function if you want different metadata per locale
 *    - Example: export async function generateMetadata({ params: { locale } }) { ... }
 * 
 * IMPORTANT:
 * - Do not remove NextIntlClientProvider (required for translation)
 * - Do not remove Navigation and Footer (will remove navigation)
 * - Locale must be valid (exists in routing.ts)
 * - Messages will be loaded automatically from messages/{locale}.json
 * - generateStaticParams is required for static generation
 * 
 * DEPENDENCIES:
 * - next-intl: for internationalization
 * - routing.ts: for locale configuration
 * - Navigation and Footer components
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components (page content)
 * @param {Object} props.params - Route parameters
 * @param {string} props.params.locale - Locale code (en, id, etc.)
 * @returns {JSX.Element} Layout with Navigation, Main Content, and Footer
 */

import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/routing';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Generate static params for all locales
 * Used for static generation at build time
 * CUSTOMIZATION: Locales are taken from routing.ts, no need to change here
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
  // Validate locale: if not valid, show 404
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  // Load messages for this locale
  // Messages are taken from messages/{locale}.json
  const messages = await getMessages({ locale });

  return (
    // Provider for translation context
    // All components inside this can use useTranslations()
    <NextIntlClientProvider messages={messages}>
      {/* Navigation Bar - Appears on all pages */}
      <Navigation />
      
      {/* Main Content - Currently opened page */}
      <main className="min-h-screen">
        {children}
      </main>
      
      {/* Footer - Appears on all pages */}
      <Footer />
    </NextIntlClientProvider>
  );
}
