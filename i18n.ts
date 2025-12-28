/**
 * Internationalization (i18n) Configuration
 * 
 * Configuration file for next-intl (multi-language support).
 * Functions:
 * - Load messages based on locale
 * - Validate valid locale
 * - Fallback to default locale if locale is invalid
 * 
 * EASY CUSTOMIZATION:
 * 
 * 1. Add New Locale:
 *    - Edit routing.ts to add new locale
 *    - Create file messages/{locale}.json (example: messages/es.json for Spanish)
 *    - Copy structure from messages/en.json and translate
 *    - This file will automatically load new locale
 * 
 * 2. Change Default Locale:
 *    - Edit routing.ts → defaultLocale
 *    - This file will automatically use defaultLocale from routing.ts
 * 
 * 3. Change Messages Path:
 *    - Line 60: `./messages/${locale}.json`
 *    - Change path if messages files are in different location
 * 
 * IMPORTANT:
 * - Do not change function structure (required by next-intl)
 * - Make sure routing.ts is configured correctly
 * - Make sure messages/{locale}.json file exists for each locale
 * - Invalid locale will fallback to defaultLocale
 * 
 * DEPENDENCIES:
 * - next-intl/server: for getRequestConfig
 * - routing.ts: for locale configuration
 * - messages/{locale}.json: translation file for each locale
 * 
 * @param {Object} config - Configuration object from next-intl
 * @param {Promise<string>} config.requestLocale - Locale from request
 * @returns {Promise<Object>} Configuration object with locale and messages
 */

import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Get locale from request
  // Locale is usually from [locale] segment in URL
  let locale = await requestLocale;

  // Validate locale: if invalid or doesn't exist, use default locale
  // CUSTOMIZATION: Valid locales are taken from routing.ts
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Return configuration with locale and messages
  // Messages are loaded from messages/{locale}.json file
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
    // CUSTOMIZATION: Change path if messages files are in different location
    // Example: `./locales/${locale}/messages.json`
  };
});
