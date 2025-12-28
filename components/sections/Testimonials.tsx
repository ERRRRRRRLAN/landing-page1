/**
 * Testimonials Section Component
 * 
 * Section that displays customer testimonials/reviews.
 * Features:
 * - 2-column grid layout (1 column on mobile)
 * - Star rating for each testimonial
 * - Avatar with name initials
 * - Fade-in animation when scrolling to section
 * - Hover effect with scale and shadow
 * - Dark gradient background with blur effect
 * 
 * EASY CUSTOMIZATION:
 * 
 * 1. Add/Remove Testimonials:
 *    - Lines 80-109: Edit testimonials array
 *    - Format for each testimonial:
 *      {
 *        name: 'Full Name',                    // Customer name
 *        role: 'Job Title, Company Name',      // Job title and company
 *        content: 'Testimonial text...',       // Testimonial content (in quotes)
 *        rating: 5,                            // Rating 1-5 (number of stars)
 *        avatar: 'FN',                         // Initials for avatar (2 letters)
 *      }
 * 
 * 2. Change Section Text:
 *    - Edit messages/en.json and messages/id.json → section "testimonials"
 *    - title: Section title (example: "What Our Customers Say")
 *    - subtitle: Section subtitle
 * 
 * 3. Change Grid Layout:
 *    - Line 150: grid-cols-1 md:grid-cols-2
 *    - Change md:grid-cols-2 to md:grid-cols-3 for 3 columns on desktop
 * 
 * 4. Change Background Color:
 *    - Line 122: bg-gradient-to-br from-black via-gray-900 to-black
 *    - Example: from-blue-900 via-blue-800 to-blue-900 for dark blue
 * 
 * 5. Change Card Color:
 *    - Line 159: bg-gradient-to-br from-white/5 via-white/3 to-white/5
 *    - Change opacity (number after /) to change transparency
 * 
 * 6. Change Rating:
 *    - Lines 85, 92, 99, 106: rating: 5
 *    - Change number 1-5 for number of stars
 * 
 * 7. Change Avatar:
 *    - Lines 86, 93, 100, 107: avatar: 'SJ'
 *    - Use 2-letter initials of customer name
 * 
 * 8. Disable Quote Icon:
 *    - Remove lines 163-165 if you don't want to display quote icon
 * 
 * IMPORTANT:
 * - Make sure testimonial content is in quotes ('' or "")
 * - Rating must be number 1-5
 * - Avatar must be 2 characters (initials)
 * - Name and role must be clear and professional
 * - Title and subtitle text must exist in messages/en.json and messages/id.json
 * 
 * DEPENDENCIES:
 * - next-intl: for multi-language support
 * - framer-motion: for animations and scroll detection
 * - lucide-react: for icons (Quote, Star)
 * 
 * @returns {JSX.Element} Testimonials section component
 */

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

// Array of customer testimonials
// CUSTOMIZATION: Add/remove/edit testimonials here
// Format: { name, role, content, rating (1-5), avatar (2-letter initials) }
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'This platform has completely transformed how we operate. The innovative solutions and community support are unmatched.',
    rating: 5,        // Rating 1-5 stars
    avatar: 'SJ',     // Initials for avatar (2 letters)
  },
  {
    name: 'Michael Chen',
    role: 'Founder, InnovateLab',
    content: 'The best investment we\'ve made. Easy to use, powerful features, and exceptional support. Highly recommended!',
    rating: 5,
    avatar: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director, GrowthCo',
    content: 'Outstanding platform that scales with our business. The team behind this truly understands what businesses need.',
    rating: 5,
    avatar: 'ER',
  },
  {
    name: 'David Kim',
    role: 'CTO, ScaleUp Solutions',
    content: 'Reliable, secure, and innovative. This has become an essential part of our daily operations.',
    rating: 5,
    avatar: 'DK',
  },
];

export default function Testimonials() {
  // Hook to get translations from messages files → section "testimonials"
  const t = useTranslations('testimonials');
  
  // Ref to detect if section has entered viewport
  const ref = useRef(null);
  
  // Hook to check if element is in viewport
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-gray-300 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-white to-gray-300 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        {/* CUSTOMIZATION: Change grid-cols-2 to grid-cols-3 for 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Render each testimonial as a card */}
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}                    // Start from bottom and invisible
              animate={isInView ? { opacity: 1, y: 0 } : {}}    // Animate to visible when entering viewport
              transition={{ duration: 0.6, delay: index * 0.1 }} // Delay based on index for stagger effect
              whileHover={{ y: -8, scale: 1.02 }}              // Lift and zoom effect on hover
              className="relative p-8 bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl hover:border-white/30 hover:bg-gradient-to-br hover:from-white/10 hover:via-white/5 hover:to-white/10 transition-all duration-300 shadow-lg"
            >
              {/* Quote Icon (decoration) */}
              {/* CUSTOMIZATION: Remove this section if you don't want to display quote icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote size={48} />
              </div>

              {/* Rating Stars */}
              {/* Display stars according to rating (1-5) */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-white text-white" />
                ))}
              </div>

              {/* Testimonial Content */}
              {/* CUSTOMIZATION: Testimonial text is taken from testimonials array */}
              <p className="text-white/90 mb-6 text-lg leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              {/* Display avatar (initials) and customer information */}
              <div className="flex items-center gap-4">
                {/* Avatar Circle with Initials */}
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg">
                  {testimonial.avatar}
                </div>
                {/* Name and Job Title */}
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              </div>

              {/* Corner Accent (bottom-left corner decoration) */}
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/20 rounded-bl-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
