/**
 * Hero Section Component
 * 
 * Main section at the top of the page (above the fold).
 * Features:
 * - Main headline with fade-in animation
 * - Subtitle and description
 * - Badge with icon (Innovative Solutions)
 * - Two CTA buttons (Primary: Get Started, Secondary: Learn More)
 * - Animated background gradient
 * - Scroll indicator at the bottom
 * 
 * EASY CUSTOMIZATION:
 * 
 * 1. Change Content Text:
 *    - Edit messages/en.json and messages/id.json → section "hero"
 *    - title: Main headline (large text)
 *    - subtitle: Subheadline (medium text)
 *    - description: Product/service description
 *    - ctaPrimary: Primary button text (usually "Get Started")
 *    - ctaSecondary: Secondary button text (usually "Learn More")
 * 
 * 2. Change Badge Text:
 *    - Line 152: Replace "Innovative Solutions" with your badge text
 *    - Or disable badge by removing lines 147-153
 * 
 * 3. Change Button Links:
 *    - Line 191: href="#pricing" → replace with primary button destination link
 *    - Line 218: href="#features" → replace with secondary button destination link
 * 
 * 4. Change Background Color:
 *    - Line 105: bg-gradient-to-br from-white via-gray-50 to-white
 *    - Example: from-blue-50 via-white to-blue-50 for light blue
 * 
 * 5. Change Button Colors:
 *    - Line 194: bg-gradient-to-r from-black via-gray-900 to-black (primary button)
 *    - Line 221: border-2 border-black (secondary button)
 * 
 * 6. Change Animations:
 *    - Lines 79-102: Edit containerVariants and itemVariants
 *    - duration: Animation duration (seconds)
 *    - delay: Delay before animation starts
 *    - staggerChildren: Delay between child items
 * 
 * 7. Change Background Animation:
 *    - Lines 111-134: Edit background gradient animation
 *    - duration: Rotation duration (seconds)
 *    - scale: Gradient circle size
 * 
 * 8. Disable Scroll Indicator:
 *    - Remove lines 230-247 if not desired
 * 
 * IMPORTANT:
 * - Make sure all translation keys (title, subtitle, etc.) exist in messages/en.json and messages/id.json
 * - Link href must be valid (#section-id or full URL)
 * - Background gradient must contrast with text for accessibility
 * - Animations can be disabled by replacing motion.div with regular div
 * 
 * DEPENDENCIES:
 * - next-intl: for multi-language support
 * - framer-motion: for animations
 * - lucide-react: for icons (ArrowRight, Sparkles)
 * 
 * @returns {JSX.Element} Hero section component
 */

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  // Hook to get translations from messages files → section "hero"
  const t = useTranslations('hero');

  // Variants for container animation (controls timing of child animations)
  // CUSTOMIZATION: Change values to adjust animation speed and delay
  const containerVariants = {
    hidden: { opacity: 0 },                    // Initial state: invisible
    visible: {
      opacity: 1,                              // Final state: visible
      transition: {
        staggerChildren: 0.2,                  // 0.2s delay between child items
        delayChildren: 0.3,                    // 0.3s delay before animation starts
      },
    },
  };

  // Variants for individual item animation (badge, title, subtitle, etc.)
  // CUSTOMIZATION: Change duration and ease for different animation effects
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },            // Start from bottom (30px) and invisible
    visible: {
      opacity: 1,                              // End: visible
      y: 0,                                    // End: normal position
      transition: {
        duration: 0.6,                         // Animation duration 0.6 seconds
        ease: [0.6, -0.05, 0.01, 0.99],       // Easing function (custom cubic bezier)
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-black/10 to-black/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-black/10 to-black/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge Section */}
          {/* CUSTOMIZATION: Replace "Innovative Solutions" text or disable this badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white rounded-full mb-8 shadow-lg"
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium">Innovative Solutions</span>
          </motion.div>

          {/* Main Title/Headline */}
          {/* CUSTOMIZATION: Text is taken from messages/en.json → hero.title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-black leading-tight"
          >
            {t('title')}
          </motion.h1>

          {/* Subtitle */}
          {/* CUSTOMIZATION: Text is taken from messages/en.json → hero.subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-black/70 mb-4 font-medium"
          >
            {t('subtitle')}
          </motion.p>

          {/* Description */}
          {/* CUSTOMIZATION: Text is taken from messages/en.json → hero.description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-black/60 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t('description')}
          </motion.p>

          {/* CTA Buttons Section */}
          {/* CUSTOMIZATION: Change href and button styling here */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA Button (Get Started) */}
            {/* CUSTOMIZATION: Change href="#pricing" with your destination link */}
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05, y: -2 }}  // Zoom and lift effect on hover
              whileTap={{ scale: 0.95 }}           // Press effect on click
              className="group relative px-8 py-4 bg-gradient-to-r from-black via-gray-900 to-black text-white font-semibold rounded-lg overflow-hidden flex items-center justify-center gap-2 min-w-[160px] shadow-lg"
            >
              {/* Normal button text */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t('ctaPrimary')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* White background that slides on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white"
                initial={{ x: '-100%' }}           // Start from left (off-screen)
                whileHover={{ x: 0 }}              // Slide to right on hover
                transition={{ duration: 0.3 }}
              />
              {/* Black text that appears on hover */}
              <span className="absolute inset-0 flex items-center justify-center gap-2 text-black opacity-0 group-hover:opacity-100 transition-opacity z-10">
                {t('ctaPrimary')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            {/* Secondary CTA Button (Learn More) */}
            {/* CUSTOMIZATION: Change href="#features" with your destination link */}
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-black text-black font-semibold rounded-lg hover:bg-gradient-to-r hover:from-black hover:via-gray-900 hover:to-black hover:text-white transition-all duration-300 flex items-center justify-center min-w-[160px] bg-gradient-to-r from-white to-gray-50"
            >
              {t('ctaSecondary')}
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          {/* CUSTOMIZATION: Remove this section if you don't want to display scroll indicator */}
          {/* Animated mouse scroll indicator at the bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }} // Appears after 1.5s
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}              // Up-down animation for container
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-black rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}            // Up-down animation for dot
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-black rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
