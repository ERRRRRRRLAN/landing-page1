/**
 * Footer Component
 * 
 * Footer component displayed at the bottom of the page.
 * Features:
 * - Brand/Logo section with description
 * - Quick Links (quick links to main sections)
 * - Legal Links (Privacy, Terms, About)
 * - Copyright notice with automatic year
 * - Fade-in animation when scrolling to footer
 * 
 * EASY CUSTOMIZATION:
 * 
 * 1. Change Logo/Brand Name:
 *    - Line 77: Replace "LOGO" with your brand name
 * 
 * 2. Change Brand Description:
 *    - Line 79-81: Edit description text according to your brand
 * 
 * 3. Change Quick Links:
 *    - Line 94-113: Add/remove links as needed
 *    - Make sure href points to existing sections (#features, #pricing, etc.)
 *    - Make sure link text exists in messages/en.json and messages/id.json → "nav" section
 * 
 * 4. Change Legal Links:
 *    - Line 126-145: Add/remove legal links
 *    - Replace href="#" with URL of Privacy Policy, Terms pages, etc.
 *    - Make sure link text exists in messages/en.json and messages/id.json → "footer.links" section
 * 
 * 5. Change Company Name in Copyright:
 *    - Line 159: Replace "Your Company" with your company name
 * 
 * 6. Change Background Color:
 *    - Line 64: Edit bg-gradient-to-br from-black via-gray-900 to-black
 *    - Example: from-blue-900 via-blue-800 to-blue-900 for blue
 * 
 * 7. Change Grid Layout:
 *    - Line 67: grid-cols-1 md:grid-cols-4 → change number for column count
 *    - Line 75: col-span-1 md:col-span-2 → change span for brand section
 * 
 * IMPORTANT:
 * - Make sure all text using t() exists in translation files
 * - Link href must be valid (internal with # or external with https://)
 * - Copyright year automatically uses new Date().getFullYear()
 * 
 * DEPENDENCIES:
 * - next-intl: for multi-language support
 * - framer-motion: for fade-in animation
 * 
 * @returns {JSX.Element} Footer component
 */

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Footer() {
  // Hook to get translations from messages files
  const t = useTranslations('footer');      // Translation for footer section
  const tNav = useTranslations('nav');       // Translation for navigation (used in Quick Links)

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid Layout: 1 column on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          {/* CUSTOMIZATION: Replace "LOGO" and description here */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}      // Start from bottom and invisible
            whileInView={{ opacity: 1, y: 0 }}  // Animate to visible when entering viewport
            viewport={{ once: true }}            // Animate only once
            transition={{ duration: 0.5 }}      // Animation duration
            className="col-span-1 md:col-span-2" // Span 2 columns on desktop
          >
            <h3 className="text-2xl font-bold mb-4">LOGO</h3>
            {/* CUSTOMIZATION: Edit brand description here */}
            <p className="text-white/70 max-w-md">
              Transforming businesses with innovative solutions. Built for the community, driven by excellence.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          {/* CUSTOMIZATION: Add/remove links here */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }} // Slight delay for stagger effect
            className="space-y-4"
          >
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {/* Link to Features section */}
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors">
                  {tNav('features')}
                </a>
              </li>
              {/* Link to Pricing section */}
              <li>
                <a href="#pricing" className="text-white/70 hover:text-white transition-colors">
                  {tNav('pricing')}
                </a>
              </li>
              {/* Link to Contact section */}
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  {tNav('contact')}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal Links Section */}
          {/* CUSTOMIZATION: Add/remove legal links, replace href with valid URLs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }} // Longer delay for stagger effect
            className="space-y-4"
          >
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2">
              {/* CUSTOMIZATION: Replace href="#" with Privacy Policy page URL */}
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  {t('links.privacy')}
                </a>
              </li>
              {/* CUSTOMIZATION: Replace href="#" with Terms of Service page URL */}
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  {t('links.terms')}
                </a>
              </li>
              {/* CUSTOMIZATION: Replace href="#" with About page URL */}
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  {t('links.about')}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section */}
        {/* CUSTOMIZATION: Replace "Your Company" with your company name */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-white/10 text-center text-white/70"
        >
          {/* Year automatically uses new Date().getFullYear() */}
          <p>&copy; {new Date().getFullYear()} Your Company. {t('rights')}.</p>
        </motion.div>
      </div>
    </footer>
  );
}
