/**
 * Features Section Component
 * 
 * Section that displays product/service features in a Bento Box grid layout.
 * Features:
 * - Responsive grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)
 * - Fade-in animation when scrolling to section
 * - Hover effect that changes card color from white to black
 * - Icon for each feature
 * - Background pattern with gradient overlay
 * 
 * EASY CUSTOMIZATION:
 * 
 * 1. Change Number of Features:
 *    - Lines 123-130: Add/remove items in features array
 *    - Format: { key: 'featureX', icon: IconComponent }
 *    - Make sure 'featureX' exists in messages/en.json and messages/id.json → features.items.featureX
 * 
 * 2. Change Feature Icons:
 *    - Line 76: Import new icon from lucide-react (example: Rocket, Lock, Globe)
 *    - Line 81: Add icon to icons array in order
 *    - Lines 123-130: Assign icon to feature (example: { key: 'feature1', icon: Rocket })
 *    - See all icons at: https://lucide.dev/icons/
 * 
 * 3. Change Feature Text:
 *    - Edit messages/en.json and messages/id.json → section "features"
 *    - title: Section title (example: "Why Choose Us")
 *    - subtitle: Section subtitle
 *    - items.feature1.title: Feature 1 title
 *    - items.feature1.description: Feature 1 description
 *    - Repeat for feature2, feature3, etc.
 * 
 * 4. Change Grid Layout:
 *    - Line 166: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
 *    - Change numbers for different column counts
 *    - Example: lg:grid-cols-4 for 4 columns on desktop
 * 
 * 5. Change Background Color:
 *    - Line 133: bg-gradient-to-b from-white via-gray-50 to-white
 *    - Line 182: bg-gradient-to-br from-white to-gray-50 (normal card)
 *    - Line 183: hover:from-black hover:via-gray-900 hover:to-black (card hover)
 * 
 * 6. Change Icon Container Color:
 *    - Line 204: bg-gradient-to-br from-black to-gray-800 (normal)
 *    - Line 204: group-hover:from-white group-hover:to-gray-100 (hover)
 * 
 * 7. Change Animations:
 *    - Lines 96-117: Edit containerVariants and itemVariants
 *    - Line 200: Edit whileHover for icon hover effect
 * 
 * 8. Change Larger Cards:
 *    - Line 174: isLarge = index === 0 || index === 2
 *    - Change index to determine which cards are larger
 *    - Or remove this logic for uniform size
 * 
 * IMPORTANT:
 * - Maximum 6 features (feature1-feature6) according to default structure
 * - If adding more than 6 features, make sure they exist in messages/en.json and messages/id.json
 * - Make sure number of icons in icons array matches number of features
 * - Keys in features array must match keys in messages JSON
 * 
 * DEPENDENCIES:
 * - next-intl: for multi-language support
 * - framer-motion: for animations and scroll detection
 * - lucide-react: for icons
 * 
 * @returns {JSX.Element} Features section component
 */

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Users, MousePointerClick, Headphones, TrendingUp, Shield } from 'lucide-react';

// Array of icons to be used for features
// CUSTOMIZATION: Import new icon from lucide-react and add to this array
// See all icons at: https://lucide.dev/icons/
const icons = [Zap, Users, MousePointerClick, Headphones, TrendingUp, Shield];

export default function Features() {
  // Hook to get translations from messages files → section "features"
  const t = useTranslations('features');
  
  // Ref to detect if section has entered viewport
  const ref = useRef(null);
  
  // Hook to check if element is in viewport
  // once: true = animation only once
  // margin: '-100px' = trigger animation 100px before element enters viewport
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Variants for container animation (controls timing of card animations)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,  // 0.1s delay between cards
      },
    },
  };

  // Variants for individual card animation
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },  // Start from bottom (50px) and invisible
    visible: {
      opacity: 1,
      y: 0,                          // End: normal position
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Array of features to display
  // CUSTOMIZATION: Add/remove features here
  // Format: { key: 'featureX', icon: IconComponent }
  // Make sure 'featureX' exists in messages/en.json and messages/id.json → features.items.featureX
  const features = [
    { key: 'feature1', icon: Zap },
    { key: 'feature2', icon: Users },
    { key: 'feature3', icon: MousePointerClick },
    { key: 'feature4', icon: Headphones },
    { key: 'feature5', icon: TrendingUp },
    { key: 'feature6', icon: Shield },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Features Grid - Bento Box Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Render each feature as a card */}
          {features.map((feature, index) => {
            const Icon = feature.icon;  // Get icon component
            
            // CUSTOMIZATION: Determine which cards are larger
            // Currently: cards at index 0 and 2 are larger on tablet
            const isLarge = index === 0 || index === 2;
            
            return (
              <motion.div
                key={feature.key}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}  // Lift and zoom effect on hover
                className={`
                  group relative p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-black rounded-2xl
                  hover:bg-gradient-to-br hover:from-black hover:via-gray-900 hover:to-black hover:text-white transition-all duration-300
                  ${isLarge ? 'md:col-span-2 lg:col-span-1' : ''}  // Span 2 columns on tablet if isLarge
                  cursor-pointer shadow-lg
                `}
              >
                {/* Hover Effect Background (black gradient that appears on hover) */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl"
                  initial={{ scale: 0, opacity: 0 }}    // Start from scale 0 and invisible
                  whileHover={{ scale: 1, opacity: 1 }} // Scale to 1 and visible on hover
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  {/* Icon Container */}
                  {/* CUSTOMIZATION: Change icon size by modifying size={32} */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}  // Shake animation on hover
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-100 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md">
                      <Icon size={32} className="text-white group-hover:text-black transition-colors duration-300" />
                    </div>
                  </motion.div>

                  {/* Feature Title */}
                  {/* Text is taken from messages/en.json → features.items.{feature.key}.title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                    {t(`items.${feature.key}.title`)}
                  </h3>
                  
                  {/* Feature Description */}
                  {/* Text is taken from messages/en.json → features.items.{feature.key}.description */}
                  <p className="text-black/70 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                    {t(`items.${feature.key}.description`)}
                  </p>
                </div>

                {/* Corner Accent (top-right corner decoration) */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-black group-hover:border-white rounded-tr-2xl transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
