/**
 * Navigation Component
 * 
 * Main navigation component displayed at the top of the page.
 * Features:
 * - Clickable logo/brand name that returns to hero section
 * - Desktop and mobile navigation menu (responsive)
 * - Language toggle (English/Indonesian)
 * - Background changes on scroll (with blur effect)
 * - Smooth animations on appear and hover
 * 
 * EASY CUSTOMIZATION:
 * 
 * 1. Change Logo/Brand Name:
 *    - Line 130-132: Replace "LOGO" text with your brand name
 *    - Or add an image: <img src="/logo.png" alt="Logo" className="h-8" />
 * 
 * 2. Add/Remove Menu Items:
 *    - Line 104-110: Edit navItems array
 *    - Format: { key: 'item_key', href: '#section-id' }
 *    - Make sure 'item_key' exists in messages/en.json and messages/id.json → "nav" section
 *    - Make sure href points to an existing section id (e.g., #hero, #features, etc.)
 * 
 * 3. Change Background Color on Scroll:
 *    - Line 118: Edit Tailwind bg-gradient-to-r class
 *    - Example: from-blue-500/95 for blue, from-green-500/95 for green
 * 
 * 4. Change Text Color:
 *    - Line 130: text-black → text-blue-600 (or other color)
 *    - Line 149: text-black → text-blue-600
 * 
 * 5. Change Animations:
 *    - Line 114-116: Edit initial, animate, transition for entrance animation
 *    - Line 148: Edit whileHover for hover effect
 * 
 * 6. Disable Animations (if not desired):
 *    - Replace all <motion.div> with <div>
 *    - Replace all <motion.a> with <a>
 *    - Remove all animation props (initial, animate, whileHover, etc.)
 * 
 * IMPORTANT:
 * - Make sure all 'key' values in navItems exist in translation files (messages/en.json and messages/id.json)
 * - If adding new sections, make sure section id matches href in navItems
 * - Logo link (#hero) must point to section with id="hero"
 * 
 * DEPENDENCIES:
 * - next-intl: for multi-language support
 * - framer-motion: for animations
 * - lucide-react: for icons (Menu, X)
 * 
 * @returns {JSX.Element} Navigation bar component
 */

'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  // Hook to get translations from messages files
  const t = useTranslations('nav');
  
  // Hook to get current locale (en or id)
  const locale = useLocale();
  
  // Router for programmatic navigation
  const router = useRouter();
  
  // Current pathname for routing
  const pathname = usePathname();
  
  // State to track if user has scrolled (to change background)
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State to toggle mobile menu (open/close)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to detect scroll and change navigation background
  // Background will change after scrolling 20px down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup: remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to toggle language between English and Indonesian
  // Will redirect user to URL with different locale
  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'id' : 'en';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  // Array of menu items for navigation
  // CUSTOMIZATION: Add/remove items here
  // Format: { key: 'item_key', href: '#section-id' }
  // Make sure 'item_key' exists in messages/en.json and messages/id.json → "nav" section
  const navItems = [
    { key: 'home', href: '#hero' },        // Home → Hero section
    { key: 'features', href: '#features' }, // Features section
    { key: 'testimonials', href: '#testimonials' }, // Testimonials section
    { key: 'pricing', href: '#pricing' },   // Pricing section
    { key: 'contact', href: '#contact' },   // Contact section
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-white/95 via-white/98 to-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          {/* CUSTOMIZATION: Replace "LOGO" with brand name or add logo image */}
          <motion.div
            whileHover={{ scale: 1.05 }}  // Zoom effect on hover
            whileTap={{ scale: 0.95 }}    // Press effect on click
            className="flex-shrink-0"
          >
            <a href="#hero" className="text-2xl font-bold text-black">
              LOGO
            </a>
            {/* Example with image: 
                <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            */}
          </motion.div>

          {/* Desktop Navigation Menu */}
          {/* This menu is only visible on desktop (hidden on mobile, appears from md breakpoint up) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-black hover:text-black/70 font-medium transition-colors relative group"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            
            {/* Language Toggle Button */}
            {/* Button to switch between English and Indonesian */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white font-medium rounded-lg hover:bg-gradient-to-r hover:from-gray-800 hover:to-black transition-all duration-300 shadow-md"
              aria-label="Toggle language"
            >
              {/* Display "ID" if locale is English, "EN" if Indonesian */}
              {locale === 'en' ? 'ID' : 'EN'}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle Button */}
          {/* Hamburger menu button only visible on mobile (md:hidden) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {/* Display X icon if menu is open, Menu icon if closed */}
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Dropdown menu that appears when hamburger button is clicked on mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}      // Start from invisible and height 0
            animate={{ opacity: 1, height: 'auto' }} // Animate to visible and auto height
            exit={{ opacity: 0, height: 0 }}          // Exit animation
            transition={{ duration: 0.3 }}              // Animation duration 0.3 seconds
            className="md:hidden bg-white border-t border-black/10"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Render all menu items */}
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu when item is clicked
                  whileHover={{ x: 5 }} // Slide right effect on hover
                  className="block text-black font-medium hover:text-black/70 transition-colors"
                >
                  {/* Display text from translation file */}
                  {t(item.key)}
                </motion.a>
              ))}
              {/* Language Toggle Button for Mobile */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false); // Close menu after switching language
                }}
                className="w-full px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white font-medium rounded-lg hover:bg-gradient-to-r hover:from-gray-800 hover:to-black transition-all duration-300 shadow-md"
              >
                {locale === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

