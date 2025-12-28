/**
 * Tailwind CSS Configuration
 * 
 * Configuration for Tailwind CSS.
 * Includes:
 * - Content paths (files that will be scanned for classes)
 * - Custom colors
 * - Custom fonts
 * - Custom animations and keyframes
 * 
 * EASY CUSTOMIZATION:
 * 
 * 1. Change Custom Colors:
 *    - Lines 71-86: Edit primary and secondary colors
 *    - Add new color: tertiary: { DEFAULT: '#...', light: '#...' }
 *    - Use in component: className="bg-primary text-secondary"
 * 
 * 2. Change Font Family:
 *    - Lines 91-96: Edit font family
 *    - Add new font: mono: ['var(--font-mono)', 'monospace']
 *    - Make sure CSS variable is defined in globals.css
 * 
 * 3. Add Custom Animation:
 *    - Lines 101-108: Add new animation
 *    - Lines 112-134: Add keyframes for animation
 *    - Example: 'bounce-slow': 'bounceSlow 2s infinite'
 * 
 * 4. Add Content Paths:
 *    - Lines 60-64: Add new path if files are in different location
 *    - Example: './src/components/*.{js,ts,jsx,tsx,mdx}'
 * 
 * 5. Add Tailwind Plugins:
 *    - Line 141: Add plugin to array
 *    - Example: plugins: [require('@tailwindcss/forms')]
 *    - Install plugin first: npm install @tailwindcss/forms
 * 
 * 6. Change Theme Defaults:
 *    - Add in theme.extend to override default Tailwind
 *    - Example: borderRadius: { '4xl': '2rem' }
 * 
 * IMPORTANT:
 * - Content paths determine which files are scanned for Tailwind classes
 * - If adding files in new location, add path in content
 * - Custom colors can be used with bg-primary, text-primary, etc.
 * - Font variables must be defined in globals.css
 * - Animations must have corresponding keyframes
 * 
 * DEPENDENCIES:
 * - tailwindcss: main package
 * - CSS variables from globals.css for fonts
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  // Content paths: files that will be scanned for Tailwind classes
  // CUSTOMIZATION: Add new path if files are in different location
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',           // Pages directory
    './components/**/*.{js,ts,jsx,tsx,mdx}',      // Components directory
    './app/**/*.{js,ts,jsx,tsx,mdx}',            // App directory (Next.js 13+)
  ],
  
  theme: {
    extend: {
      // Custom Colors
      // CUSTOMIZATION: Change or add new colors here
      // Use in component: className="bg-primary text-secondary"
      colors: {
        primary: {
          DEFAULT: '#000000',  // Default primary color (black)
          light: '#1a1a1a',    // Light primary color
        },
        secondary: {
          DEFAULT: '#ffffff',  // Default secondary color (white)
          dark: '#f5f5f5',     // Dark secondary color
        },
        // Example add new color:
        // tertiary: {
        //   DEFAULT: '#3b82f6',
        //   light: '#60a5fa',
        //   dark: '#2563eb',
        // },
      },
      
      // Custom Font Families
      // CUSTOMIZATION: Change or add new fonts here
      // Make sure CSS variable is defined in globals.css
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],  // Sans-serif font
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],  // Display font
        // Example add new font:
        // mono: ['var(--font-mono)', 'monospace'],
      },
      
      // Custom Animations
      // CUSTOMIZATION: Add new animation here
      // Make sure keyframes are defined below
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        // Example add new animation:
        // 'bounce-slow': 'bounceSlow 2s infinite',
      },
      
      // Custom Keyframes for Animations
      // CUSTOMIZATION: Add new keyframes for animation above
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        // Example add new keyframes:
        // bounceSlow: {
        //   '0%, 100%': { transform: 'translateY(0)' },
        //   '50%': { transform: 'translateY(-10px)' },
        // },
      },
    },
  },
  
  // Tailwind Plugins
  // CUSTOMIZATION: Add new plugins here
  // Install plugin first: npm install @tailwindcss/forms
  plugins: [],
  // Example: plugins: [require('@tailwindcss/forms')],
}

export default config
