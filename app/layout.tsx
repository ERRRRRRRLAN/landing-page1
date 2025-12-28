/**
 * Root Layout Component
 * 
 * Root layout for the entire Next.js application.
 * Features:
 * - Sets up font (Inter from Google Fonts)
 * - Sets up SEO metadata (title, description, keywords, Open Graph)
 * - Sets up viewport for responsive
 * - Sets up global styles
 * 
 * EASY CUSTOMIZATION:
 * 
 * 1. Change SEO Metadata:
 *    - Lines 77-108: Edit all metadata for SEO
 *    - title: Page title (appears in browser tab and search results)
 *    - description: Page description (appears in search results)
 *    - keywords: Keywords for SEO (separate with commas)
 *    - authors: Author/company name
 *    - openGraph: Metadata for social media sharing (Facebook, Twitter, etc.)
 *    - robots: Rules for search engine crawler
 * 
 * 2. Change Font:
 *    - Lines 64-70: Import different font from Google Fonts
 *    - Example: import { Roboto } from 'next/font/google'
 *    - Replace Inter with Roboto
 *    - Or use local font with @font-face in globals.css
 * 
 * 3. Change Global Background Color:
 *    - Line 129: bg-white → bg-gray-50 or other color
 *    - Or change in globals.css for more flexibility
 * 
 * 4. Change Global Text Color:
 *    - Line 129: text-black → text-gray-900 or other color
 * 
 * 5. Add Other Fonts:
 *    - Import new font (example: import { Poppins } from 'next/font/google')
 *    - Add to body className if needed
 * 
 * 6. Change HTML Language:
 *    - Line 126: lang="en" → lang="id" or other language
 *    - Or make dynamic based on locale
 * 
 * IMPORTANT:
 * - Metadata is very important for SEO, make sure to fill correctly
 * - Title should be maximum 60 characters
 * - Description should be maximum 160 characters
 * - Open Graph image can be added in openGraph.images
 * - Viewport must be separate (Next.js 14 requirement)
 * - Font variable (--font-inter) is used in Tailwind config
 * 
 * DEPENDENCIES:
 * - next/font/google: for Google Fonts
 * - globals.css: for global styles
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components
 * @returns {JSX.Element} Root layout with HTML structure
 */

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Inter font configuration from Google Fonts
// CUSTOMIZATION: Replace with other font if desired
const inter = Inter({ 
  subsets: ['latin'],           // Character subset to load
  variable: '--font-inter',    // CSS variable name (used in Tailwind)
  display: 'swap',              // Font display strategy (swap = show fallback first)
});

/**
 * SEO Metadata
 * CUSTOMIZATION: Edit all metadata for better SEO
 * Make sure title and description are relevant to website content
 */
export const metadata: Metadata = {
  // Page title (appears in browser tab and search results)
  // CUSTOMIZATION: Replace with relevant title
  title: 'Transform Your Business | Innovative Solutions',
  
  // Page description (appears in search results)
  // CUSTOMIZATION: Replace with relevant description (maximum 160 characters)
  description: 'Discover innovative products and services designed to empower your success. Built for the community, driven by excellence.',
  
  // Keywords for SEO (separate with commas)
  // CUSTOMIZATION: Replace with relevant keywords
  keywords: 'business solutions, innovation, community, technology',
  
  // Author/Company
  // CUSTOMIZATION: Replace with your author/company name
  authors: [{ name: 'Your Company' }],
  
  // Open Graph metadata (for social media sharing)
  // CUSTOMIZATION: Add images if needed
  openGraph: {
    title: 'Transform Your Business | Innovative Solutions',
    description: 'Discover innovative products and services designed to empower your success.',
    type: 'website',
    // images: [{ url: '/og-image.jpg' }], // Uncomment and add OG image
  },
  
  // Rules for search engine crawler
  robots: {
    index: true,   // Allow indexing
    follow: true,  // Allow follow links
  },
};

/**
 * Viewport Configuration
 * IMPORTANT: Must be separate from metadata (Next.js 14 requirement)
 * CUSTOMIZATION: Change if needed for different responsive behavior
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* CUSTOMIZATION: Change lang="en" with your default language */}
      {/* scroll-smooth: Smooth scroll behavior for anchor links */}
      <body className={`${inter.variable} font-sans antialiased bg-white text-black`}>
        {/* 
          inter.variable: CSS variable for font (used in Tailwind)
          font-sans: Sans-serif font family
          antialiased: Smooth font rendering
          bg-white: White background
          text-black: Black text
        */}
        {children}
      </body>
    </html>
  );
}
