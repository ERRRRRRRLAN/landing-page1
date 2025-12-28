/**
 * Home Page Component
 * 
 * Main page that combines all sections.
 * Section order:
 * 1. Hero - Main section at the top
 * 2. Features - Product/service features grid
 * 3. Testimonials - Customer testimonials
 * 4. Pricing - Pricing packages
 * 5. Contact - Contact form
 * 
 * EASY CUSTOMIZATION:
 * 
 * 1. Add New Section:
 *    - Import new section component (example: import About from '@/components/sections/About')
 *    - Add <About /> inside return
 *    - Make sure component exists in components/sections/ folder
 * 
 * 2. Remove Section:
 *    - Remove import of unwanted component
 *    - Remove <ComponentName /> from return
 * 
 * 3. Change Section Order:
 *    - Move <ComponentName /> to desired position
 *    - Current order: Hero → Features → Testimonials → Pricing → Contact
 * 
 * 4. Add Custom Wrapper/Section:
 *    - Add div or section wrapper if needed
 *    - Example: <div className="custom-wrapper"><Hero /></div>
 * 
 * IMPORTANT:
 * - All sections must have id that matches href in Navigation
 * - Make sure Hero section has id="hero"
 * - Make sure Features section has id="features"
 * - Make sure Testimonials section has id="testimonials"
 * - Make sure Pricing section has id="pricing"
 * - Make sure Contact section has id="contact"
 * - If adding new section, make sure it's also in Navigation.tsx
 * 
 * DEPENDENCIES:
 * - All section components from @/components/sections/
 * 
 * @returns {JSX.Element} Home page with all sections
 */

import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Main section at the top */}
      <Hero />
      
      {/* Features Section - Product/service features grid */}
      <Features />
      
      {/* Testimonials Section - Customer testimonials */}
      <Testimonials />
      
      {/* Pricing Section - Pricing packages */}
      <Pricing />
      
      {/* Contact Section - Contact form */}
      <Contact />
    </>
  );
}
