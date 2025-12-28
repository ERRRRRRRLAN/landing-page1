/**
 * Routing Configuration
 * 
 * Configuration for routing and internationalization.
 * Used by:
 * - next-intl for multi-language routing
 * - Middleware for locale detection
 * - Layout for generating static params
 * 
 * EASY CUSTOMIZATION:
 * 
 * 1. Add New Locale:
 *    - Line 52: Add new locale to locales array
 *    - Example: locales: ['en', 'id', 'es'] to add Spanish
 *    - Make sure messages/{locale}.json file exists (example: messages/es.json)
 *    - Copy structure from messages/en.json and translate
 * 
 * 2. Change Default Locale:
 *    - Line 56: defaultLocale: 'en'
 *    - Change 'en' with locale you want as default
 *    - Make sure locale exists in locales array
 * 
 * 3. Change Locale Prefix Strategy:
 *    - Line 63: localePrefix: 'as-needed'
 *    - 'as-needed': Only show locale in URL if not default (example: /id/... but / for en)
 *    - 'always': Always show locale in URL (example: /en/..., /id/...)
 *    - 'never': Never show locale in URL (not recommended for multi-language)
 * 
 * IMPORTANT:
 * - Locale code must be lowercase and follow ISO 639-1 format (2 letters)
 * - Make sure each locale has messages/{locale}.json file
 * - Default locale must exist in locales array
 * - Do not change 'as const' (required for TypeScript type safety)
 * 
 * USAGE EXAMPLES:
 * - locales: ['en', 'id'] → English and Indonesian
 * - locales: ['en', 'id', 'es', 'fr'] → English, Indonesian, Spanish, French
 * 
 * DEPENDENCIES:
 * - next-intl: uses this configuration for routing
 * - messages/{locale}.json: translation file for each locale
 * 
 * @type {Object}
 * @property {readonly string[]} locales - Array of supported locales
 * @property {readonly string} defaultLocale - Default locale
 * @property {readonly 'as-needed' | 'always' | 'never'} localePrefix - Strategy for locale prefix in URL
 */

export const routing = {
  // Array of supported locales
  // CUSTOMIZATION: Add new locale here (example: 'es' for Spanish)
  locales: ['en', 'id'] as const,
  
  // Default locale (will be used if locale is invalid or not specified)
  // CUSTOMIZATION: Change with locale you want as default
  defaultLocale: 'en' as const,
  
  // Locale prefix strategy
  // 'as-needed': Only show locale if not default (example: /id/... but / for en)
  // 'always': Always show locale in URL (example: /en/..., /id/...)
  // 'never': Never show locale in URL (not recommended)
  // CUSTOMIZATION: Change strategy as needed
  localePrefix: 'as-needed' as const
};
