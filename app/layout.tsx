import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Transform Your Business | Innovative Solutions',
  description: 'Discover innovative products and services designed to empower your success. Built for the community, driven by excellence.',
  keywords: 'business solutions, innovation, community, technology',
  authors: [{ name: 'Your Company' }],
  openGraph: {
    title: 'Transform Your Business | Innovative Solutions',
    description: 'Discover innovative products and services designed to empower your success.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Pisahkan viewport ke export terpisah (Next.js 14 requirement)
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
      <body className={`${inter.variable} font-sans antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}

